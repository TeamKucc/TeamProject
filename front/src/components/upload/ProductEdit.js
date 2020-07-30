import React from 'react';
import { Button, Form, Input } from 'antd';
import { Checkbox } from '@material-ui/core';

const { TextArea } = Input;

const ProductEdit = ({ onPublish, onChange, product }) => {
  if (!product) return null;
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
        <Input onChange={onChange} name="stock" />
        <br />
        <br />

        <label>판매상태</label>
        <br/>
        <input type="radio" name="enable" value="true" /> 판매 &nbsp;
        <input type="radio" name="enable" value="false" /> 품절
        <br />
        <br />

        <Button onClick={onPublish}>Submit</Button>
      </Form>
    </div>
	);
};

export default ProductEdit;