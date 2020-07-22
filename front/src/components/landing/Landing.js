import React, { useEffect, useState } from "react";
import Axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ImageSlider from "./ImageSlider";


function Landing() {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    const variables = {};

    getProducts(variables);
  }, []);

  const getProducts = () => {
    Axios.get("/api/product/getProducts").then((response) => {
      console.log(response.data);
      if (response.data) {
        setProducts(response.data);
      } else {
        alert("Failed to fectch product datas");
      }
    });
  };

  const useStyles = makeStyles({
    root: {
      minWidth: 200,
      maxWidth: 340,
      display: "inline-block",
      margin: 6,
      textAlign: "center",
    },
    media: {
      height: 140,
    },
  });

  const classes = useStyles();
  const renderCards = Products.map((product, index) => {
    return (
      <Card className={classes.root} key={index}>
        <CardActionArea>
          <a href={`/product/${product._id}`}>
            <ImageSlider images={product.thumbnails} />
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
          </a>
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
    );
  });

  return (
   
    <div style={{ width: "75%", margin: "3rem auto" }}>
      <div style={{ textAlign: "center" }}>
        <h2> 제품목록 </h2>
      </div>
      
        {Products.length === 0 ? (
          <div
            style={{
              display: "flex",
              height: "300px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2>등록된 제품이 없습니다!</h2>
          </div>
        ) : (
          <div>{renderCards}</div>
        )}
      
      <br />
      <br />
    </div>
    
  );
}

export default Landing;
