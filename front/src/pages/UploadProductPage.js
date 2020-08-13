import React from "react"
// import UploadProduct from "../components/upload/UploadProduct"
// import UploadProduct2 from "../components/upload/UploadProduct2"
import UploadContainer from '../container/upload/UploadContainer'
import FileUploadContainer from '../container/upload/FileUploadContainer'
import ThumbnailUploadContainer from '../container/upload/ThumbnailUploadContainer'
import HeaderContainer from "../container/common/HeaderContainer"

const UploadProductPage = () => {
  return (
    <div>
      <HeaderContainer />
      <FileUploadContainer/>
      <ThumbnailUploadContainer/>
      <UploadContainer/>
    </div>
  )
}

export default UploadProductPage
