import React, { useState } from "react"
import Dropzone from "react-dropzone"
import Axios from "axios"

function ThumbnailUpload(props) {
  const [Thumbnails, setThumbnails] = useState([])

  const onDrop = (files) => {
    let formData = new FormData()
    const config = {
      header: { "content-type": "multipart/form-data" },
    }
    formData.append("file", files[0])
    console.log(files)
    //save the Image we chose inside the Node Server
    Axios.post("/api/product/uploadThumbnail", formData, config).then((response) => {
      console.log(response.data)
      if (response.data.success) {
        setThumbnails([...Thumbnails, response.data.image])
        props.refreshFunction([...Thumbnails, response.data.image])
      } else {
        alert("Failed to save the Thumbnail in Server")
      }
    })
  }

  const onDelete = (thumbnail) => {
    const currentIndex = Thumbnails.indexOf(thumbnail)

    let newThumbnails = [...Thumbnails]
    newThumbnails.splice(currentIndex, 1)

    setThumbnails(newThumbnails)
    props.refreshFunction(newThumbnails)
  }

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Dropzone onDrop={onDrop} multiple={false} maxSize={800000000}>
        {({ getRootProps, getInputProps }) => (
          <div
            style={{
              width: "300px",
              height: "240px",
              border: "1px solid lightgray",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            {...getRootProps()}
          >
            {console.log("getRootProps", { ...getRootProps() })}
            {console.log("getInputProps", { ...getInputProps() })}
            <input {...getInputProps()} />
          </div>
        )}
      </Dropzone>

      <div style={{ display: "flex", width: "350px", height: "240px", overflowX: "scroll" }}>
        {Thumbnails.map((thumbnail, index) => (
          <div key={index} onClick={() => onDelete(thumbnail)}>
            <img style={{ minWidth: "300px", width: "300px", height: "240px" }} src={`http://localhost:4000/${thumbnail}`} alt={`productImg-${index}`} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ThumbnailUpload
