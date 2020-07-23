import React from "react"
// import UploadProduct from "../components/upload/UploadProduct"
// import UploadProduct2 from "../components/upload/UploadProduct2"
import UploadContainer from '../container/upload/UploadContainer'
import FileUploadContainer from '../container/upload/FileUploadContainer'


const UploadProductPage = () => {
  return (
    <div>
      <FileUploadContainer/>
      <UploadContainer/>
    </div>
  )
}

export default UploadProductPage
