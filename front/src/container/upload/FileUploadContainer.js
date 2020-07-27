import React, { useState, useEffect, useCallback } from 'react';
import FileUpload from '../../components/upload/FileUpload';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { imageUpload } from '../../modules/upload';

const FileUploadContainer = () => {


  const [Images, setImages] = useState([]);
  const dispatch = useDispatch();
  const { images, loading } = useSelector(({ upload, loading }) => ({
    images: upload.images,
    loading: loading['product/IMAGE_UPLOAD']
  })
  );

  const onDrop = useCallback((files) => {
    dispatch(
      imageUpload({
        files
      }))
  })

  const onDelete = (image) => {
    const currentIndex = Images.indexOf(image);

    let newImages = [...Images]
    newImages.splice(currentIndex, 1)
    setImages(newImages)
  }

  return <FileUpload onDrop={onDrop} onDelete={onDelete} images={images} loading={loading} />;
};

export default withRouter(FileUploadContainer);
