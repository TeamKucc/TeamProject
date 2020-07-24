import React from 'react';
import FileUpload from '../../components/upload/FileUpload';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { imageUpload } from '../../modules/upload';

const FileUploadContainer = ({ history }) => {
  // function*  imageSaga(files){
  // 	const formData = new FormData()
  // 	formData.append('file', files)
  // 	try{
  // 		const options = {
  // 			method: 'POST',
  // 			header: { 'content-type': 'multipart/form-data' },
  // 			body : formData
  // 		}
  // 		const response = yield call(PRODUCT_UPLOAD, imageUploadSaga, options)
  // 		console.log(response)
  // 	} catch (err) {
  // 		console.log(err)
  // 	}
  // }

  const dispatch = useDispatch();
  const { images } = useSelector(({ upload }) => ({
    images: upload.images,
  }));

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

  const onDrop = (files) => {
    
    const formData = new FormData();
    formData.append('file', files[0]);
    try {
      const options = {
        headers: { 'content-type': 'multipart/form-data' },
        body: formData,
      }
      console.log(options)
      dispatch(
        imageUpload({
          options,
        }),
      );
    } catch (e) {
      alert('Error:' + e);
    }
  };

  return <FileUpload onDrop={onDrop} images={images} />;
};

export default withRouter(FileUploadContainer);
