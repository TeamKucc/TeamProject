import React from 'react';
import { Button, Form, Input } from 'antd';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const { TextArea } = Input;

function UploadProduct({ onPublish, onChange, product }) {
  
  console.log(product)

  const classes = useStyles();

  return (
    <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
      <Form onSubmit={onPublish}>
        <label>제품명</label>
        <Input onChange={onChange} name="title" value={product.title}/>
        <br />
        <br />

        <label>제품설명</label>
        <TextArea onChange={onChange} name="description" value={product.description}/>
        <br />
        <br />

        <label>원가</label>
        <Input onChange={onChange} name="price" value={product.price}/>
        <br />
        <br />

        <label>할인가</label>
        <Input onChange={onChange} name="discount" value={product.discount}/>
        <br />
        <br />

        <label>할인인원</label>
        <Input onChange={onChange} name="person" value={product.person}/>
        <br />
        <br />

        <label>재고수량</label>
        <Input onChange={onChange} name="stock" value={product.stock}/>
        <br />
        <br />

        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">카테고리</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
					name="category"
					value={product.category}
          onChange={onChange}
        >
          <MenuItem value={"패션의류"}>패션의류</MenuItem>
          <MenuItem value={"패션잡화"}>패션잡화</MenuItem>
          <MenuItem value={"뷰티"}>뷰티</MenuItem>
          <MenuItem value={"식품"}>식품</MenuItem>
          <MenuItem value={"출산/유아동"}>출산/유아동</MenuItem>
          <MenuItem value={"디지털/가전"}>디지털/가전</MenuItem>
          <MenuItem value={"인테리어"}>인테리어</MenuItem>
          <MenuItem value={"스포츠/레저"}>스포츠/레저</MenuItem>
          <MenuItem value={"생활"}>생활</MenuItem>
        </Select>
      </FormControl>
      <br/>
      <br/>
        <Button onClick={onPublish}>Submit</Button>
      </Form>
    </div>
  );
}

export default UploadProduct;
