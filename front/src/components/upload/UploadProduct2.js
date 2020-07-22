import React from "react"
import { Typography, Button, Form, Input } from "antd"
import FileUpload from "./FileUpload"
import ThumbnailUpload from "./ThumbnailUpload"
// import Axios from "axios"

const { Title } = Typography
const { TextArea } = Input

function UploadProduct({onPublish,onChange,product}) {

  const f1 =()=>{
    console.log(product)
  }

  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <Title level={2}>제품등록</Title>
      </div>
    <button onClick={f1}>체크</button>
      <Form onSubmit={onPublish}>
        {/* DropZone */}
        <FileUpload  onChange={onChange} name="images"  product={product} />
        <br />
        <br />

        <ThumbnailUpload onChange={onChange} name="thumbnails"  />
        <br />
        <br />

        <label>제품명</label>
        <Input onChange={onChange} name="title"  />
        <br />
        <br />

        <label>제품설명</label>
        <TextArea onChange={onChange} name="description"  />
        <br />
        <br />

        <label>원가</label>
        <Input onChange={onChange} name="price" value={product}  />
        <br />
        <br />

        <label>할인가</label>
        <Input onChange={onChange} name="discount"  />
        <br />
        <br />

        <label>할인인원</label>
        <Input onChange={onChange} name="person"   />
        <br />
        <br />

        <Button onClick={onPublish}>Submit</Button>
      </Form>
    </div>
  )
}

export default UploadProduct
