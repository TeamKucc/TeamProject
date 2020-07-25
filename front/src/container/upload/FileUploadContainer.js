import React, {useState} from 'react';
import FileUpload from '../../components/upload/FileUpload';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { imageUpload } from '../../modules/upload';

const FileUploadContainer = () => {


  const [Images, setImages] = useState([]);
  const dispatch = useDispatch();
  const { images } = useSelector(({ upload }) => ({
    images: upload.images,
  })
  );

// console.log(images)
  const onDrop = (files) => {
    dispatch(
      imageUpload({
        files
      }))
    setImages([...Images, files])
  };

  const onDelete = (image) => {
    const currentIndex = Images.indexOf(image);

    let newImages = [...Images]
    newImages.splice(currentIndex, 1)

    setImages(newImages)
}
// console.log(Images)
  return <FileUpload onDrop={onDrop} onDelete={onDelete} images={Images}/>;
};

export default withRouter(FileUploadContainer);
