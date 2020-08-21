import React from "react"

function ImageSlider(props) {
  return (
    <div>
        {props.images.map((image, index) => (
          <div key={index}>
            <img style={{ maxHeight: "100px" }} src={`http://localhost:4000/${image}`} alt="productImage" />
          </div>
        ))}
    </div>
  )
}

export default ImageSlider
