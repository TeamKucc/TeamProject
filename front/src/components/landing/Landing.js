import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ImageSlider from './ImageSlider';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import { Link } from 'react-router-dom';

const LangingBlock = styled(Responsive)`
  margin-top:3rem
`

function Landing({ Products, loading }) {

  const[ cate, setCate ] = useState("전체")

  const cateChange = (e) => {
    setCate(e.target.value)
  }

  let Prod = Object.keys(Products).map(function (key) {
    return Products[key]
  })
  const useStyles = makeStyles({
    root: {
      minWidth: 200,
      maxWidth: 340,
      display: 'inline-block',
      margin: 6,
      textAlign: 'center',
    },
    media: {
      height: 140,
    },
  });

  const classes = useStyles();
  const renderCards = Prod.map((product, index) => {
    if(!product) return null;
    const image = product.thumbnails[0]

    if(product.category == cate) {
    return (
      <Card className={classes.root} key={index}>
        <CardActionArea>
          <Link to={`/${product._id}`}>
            {/* <ImageSlider images={product.thumbnails} /> */}
            {product.thumbnails.map((image, index) => (
                <div key={index}>
                    <img
                        style={{ minWidth: '300px', width: '300px', height: '240px' }}
                        alt={`productImg-${index}`}
                        src={`http://localhost:4000/${product.thumbnails[index].image}`}
                    />
                </div>
            ))}
            <CardContent>
              <Typography gutterBottom variant="h6" component="h2">
                {product.title}
              </Typography>
            </CardContent>
            <CardActions>
              <Typography variant="subtitle1" component="p">
                {product.discount}
              </Typography>
              <Typography
                variant="overline"
                color="textSecondary"
                component="p"
              >
                {product.price}
              </Typography>
            </CardActions>
          </Link>
        </CardActionArea>
        <CardActions>
          <Typography variant="overline" color="primary" component="p">
            참여인원
          </Typography>
          <Typography variant="overline" color="textSecondary" component="p">
            딜성공
          </Typography>
        </CardActions>
      </Card>
    )} else if (cate == "전체") {
    return (
      <Card className={classes.root} key={index}>
        <CardActionArea>
          <Link to={`/${product._id}`}>
            {/* <ImageSlider images={product.thumbnails} /> */}
            {product.thumbnails.map((image, index) => (
                <div key={index}>
                    <img
                        style={{ minWidth: '300px', width: '300px', height: '240px' }}
                        alt={`productImg-${index}`}
                        src={`http://localhost:4000/${product.thumbnails[index].image}`}
                    />
                </div>
            ))}
            <CardContent>
              <Typography gutterBottom variant="h6" component="h2">
                {product.title}
              </Typography>
            </CardContent>
            <CardActions>
              <Typography variant="subtitle1" component="p">
                {product.discount}
              </Typography>
              <Typography
                variant="overline"
                color="textSecondary"
                component="p"
              >
                {product.price}
              </Typography>
            </CardActions>
          </Link>
        </CardActionArea>
        <CardActions>
          <Typography variant="overline" color="primary" component="p">
            참여인원
          </Typography>
          <Typography variant="overline" color="textSecondary" component="p">
            딜성공
          </Typography>
        </CardActions>
      </Card>
    )}
  });
  return (
    <LangingBlock>
      <div style={{ width: '75%', margin: '3rem auto' }}>
        <div style={{ textAlign: 'center' }}>
          <h2> 제품목록 </h2>
        </div>

        {Products.length === 0 ? (
          <div
            style={{
              display: 'flex',
              height: '300px',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <h2>등록된 제품이 없습니다!</h2>
          </div>
        ) : (
            <div>
            <button onClick={cateChange} value="전체">전체</button>
            <button onClick={cateChange} value="패션의류">패션의류</button>
            <button onClick={cateChange} value="패션잡화">패션잡화</button>
            <button onClick={cateChange} value="뷰티">뷰티</button>
            <button onClick={cateChange} value="식품">식품</button>
            <button onClick={cateChange} value="출산/유아동">출산/유아동</button>
            <button onClick={cateChange} value="디지털/가전">디지털/가전</button>
            <button onClick={cateChange} value="인테리어">인테리어</button>
            <button onClick={cateChange} value="스포츠/레저">스포츠/레저</button>
            <button onClick={cateChange} value="생활">생활</button>

              {!loading && Products && (<div>
                {renderCards}
              </div>)
              }
            </div>
          )}

        <br />
        <br />
      </div>
    </LangingBlock>
  );
}

export default Landing;