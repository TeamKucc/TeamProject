// import React, { useState } from "react"
// import { Typography, Button, Form, Input } from "antd"
// import FileUpload from "./FileUpload"
// import ThumbnailUpload from "./ThumbnailUpload"
// import Axios from "axios"

// const { Title } = Typography
// const { TextArea } = Input

// function UploadProduct(props) {
//   const [TitleValue, setTitleValue] = useState("")
//   const [DescriptionValue, setDescriptionValue] = useState("")
//   const [PriceValue, setPriceValue] = useState(0)
//   const [DiscountValue, setDiscountValue] = useState(0)
//   const [PersonValue, setPersonValue] = useState(0)
//   const [Images, setImages] = useState([])
//   const [Thumbnails, setThumbnails] = useState([])
//   const [ProductValue, setProductValue] = useState("")

//   const onTitleChange = (e) => {
//     setTitleValue(e.currentTarget.value)
//   }

//   const onDescriptionChange = (e) => {
//     setDescriptionValue(e.currentTarget.value)
//   }

//   const onPriceChange = (e) => {
//     setPriceValue(e.currentTarget.value)
//   }

//   const onDiscountChange = (e) => {
//     setDiscountValue(e.currentTarget.value)
//   }

//   const onPersonChange = (e) => {
//     setPersonValue(e.currentTarget.value)
//   }

//   const updateImages = (newImages) => {
//     setImages(newImages)
//   }

//   const updateThumbnails = (newThumbnails) => {
//     setThumbnails(newThumbnails)
//   }

//   const onSubmit = (e) => {
//     e.preventDefault()

//     if (!TitleValue || !DescriptionValue || !PriceValue || !DiscountValue || !PersonValue) {
//       return alert("정보를 모두 입력해주세요!")
//     }

//     const variables = {
//       title: TitleValue,
//       description: DescriptionValue,
//       price: PriceValue,
//       images: Images,
//       discount: DiscountValue,
//       person: PersonValue,
//       thumbnails: Thumbnails,
//     }

//     Axios.post("/api/product/uploadProduct", variables).then((response) => {
//       if (response.data.success) {
//         alert("제품등록 성공!")
//         // props.history.push("/")
//       } else {
//         alert("제품등록 실패!")
//       }
//     })
//   }

//   return (
//     <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
//       <div style={{ textAlign: "center", marginBottom: "2rem" }}>
//         <Title level={2}>제품등록</Title>
//       </div>

//       <Form onSubmit={onSubmit}>
//         {/* DropZone */}
//         <FileUpload refreshFunction={updateImages} />
//         <br />
//         <br />

//         <ThumbnailUpload refreshFunction={updateThumbnails} />
//         <br />
//         <br />

//         <label>제품명</label>
//         <Input onChange={onTitleChange} value={TitleValue} />
//         <br />
//         <br />

//         <label>제품설명</label>
//         <TextArea onChange={onDescriptionChange} value={DescriptionValue} />
//         <br />
//         <br />

//         <label>원가</label>
//         <Input onChange={onPriceChange} value={PriceValue} type="number" />
//         <br />
//         <br />

//         <label>할인가</label>
//         <Input onChange={onDiscountChange} value={DiscountValue} type="number" />
//         <br />
//         <br />

//         <label>할인인원</label>
//         <Input onChange={onPersonChange} value={PersonValue} type="number" />
//         <br />
//         <br />

//         <Button onClick={onSubmit}>Submit</Button>
//       </Form>
//     </div>
//   )
// }

// export default UploadProduct
