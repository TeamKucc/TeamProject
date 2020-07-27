import React from 'react';
import { Button, Form, Input } from 'antd';

const { TextArea } = Input;

function UploadProduct({ onPublish, onChange, product }) {

  return (
    <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
      <Form onSubmit={onPublish}>
        <label>제품명</label>
        <Input onChange={onChange} name="title" />
        <br />
        <br />

        <label>제품설명</label>
        <TextArea onChange={onChange} name="description" />
        <br />
        <br />

        <label>원가</label>
        <Input onChange={onChange} name="price" />
        <br />
        <br />

        <label>할인가</label>
        <Input onChange={onChange} name="discount" />
        <br />
        <br />

        <label>할인인원</label>
        <Input onChange={onChange} name="person" />
        <br />
        <br />

        <Button onClick={onPublish}>Submit</Button>
      </Form>
    </div>
  );
}

export default UploadProduct;
