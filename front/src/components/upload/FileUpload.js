import React from 'react';
import Dropzone from 'react-dropzone';
import {Typography} from 'antd'
// import Axios from 'axios';
// import { imageUpload } from '../../modules/upload';

function FileUpload( { onDrop, images } ) {

  const { Title } = Typography;
  // const [Images, setImages] = useState([]);

  // const onDrop = (files) => {

  //     let formData = new FormData();
  //     const config = {
  //         header: { 'content-type': 'multipart/form-data' }
  //     }
  //     formData.append("file", files[0])
  //     //save the Image we chose inside the Node Server
  //     Axios.post('/api/product/imageUpload', formData, config)
  //         .then(response => {
  //             if (response.data.success) {

  //                 setImages([...Images, response.data.image])
  //               //   props.onChange([...Images, response.data.image])

  //             } else {
  //                 alert('Failed to save the Image in Server')
  //             }
  //         })
  // }

// const onDelete = (image) => {
//     const currentIndex = Images.indexOf(image);

//     let newImages = [...Images]
//     newImages.splice(currentIndex, 1)

//     setImages(newImages)
//     // props.refreshFunction(newImages)
// }

  return (
    <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Title level={2}>제품등록</Title>
      </div>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Dropzone onDrop={onDrop} multiple={false} maxSize={800000000}>
        {({ getRootProps, getInputProps }) => (
          <div
            style={{
              width: '300px',
              height: '240px',
              border: '1px solid lightgray',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            {...getRootProps()}
          >
            <input {...getInputProps()} />
          </div>
        )}
      </Dropzone>

      <div
        style={{
          display: 'flex',
          width: '350px',
          height: '240px',
          overflowX: 'scroll',
        }}
      >
        {images.map((image, index) => (
          // <div key={index} onClick={() => onDelete(image)}>
          <div key={index}>
            <img
              style={{ minWidth: '300px', width: '300px', height: '240px' }}
              src={`http://localhost:4000/${image}`}
              alt={`productImg-${index}`}
            />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default FileUpload;
