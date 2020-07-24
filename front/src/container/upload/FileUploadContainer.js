import React, {useState} from 'react';
import FileUpload from '../../components/upload/FileUpload';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { imageUpload } from '../../modules/upload';

const FileUploadContainer = () => {
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

  const [Images, setImages] = useState([]);


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
    dispatch(
      imageUpload({
        files
      }))
      setImages([...Images, images])
  };

  const onDelete = (image) => {
    const currentIndex = Images.indexOf(image);

    let newImages = [...Images]
    newImages.splice(currentIndex, 1)

    setImages(newImages)
    // props.refreshFunction(newImages)
}

  return <FileUpload onDrop={onDrop} onDelete={onDelete} images={Images} />;
};

export default withRouter(FileUploadContainer);
