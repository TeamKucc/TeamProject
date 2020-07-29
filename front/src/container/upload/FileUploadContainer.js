import React from 'react';
import FileUpload from '../../components/upload/FileUpload';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { imageUpload, imagedDelete } from '../../modules/upload';

const FileUploadContainer = () => {



  const dispatch = useDispatch();
  const { images, loading } = useSelector(({ upload, loading }) => ({
    images: upload.images,
    loading: loading['product/IMAGE_UPLOAD']
  })
  );

  const onDrop = (files) => {
    console.log(files)
    dispatch(
      imageUpload({
        files
      }))
  }

  const onDelete = (image) => {
    const currentIndex = images.indexOf(image);
    dispatch(imagedDelete(currentIndex))
  }

  return <FileUpload onDrop={onDrop} onDelete={onDelete} images={images} loading={loading} />;
};

export default withRouter(FileUploadContainer);
