import React from "react"

function ImageSlider(props) {
  console.log(props.images)
  return (
    <div>
        {props.images.map((image, index) => (
          <div key={index}>
            <img style={{ width: "100%", maxHeight: "300px" }} src={`http://localhost:4000/${image}`} alt="productImage" />
          </div>
        ))}
    </div>
  )
}

export default ImageSlider
