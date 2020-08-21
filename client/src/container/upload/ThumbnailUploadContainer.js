import React, { useState } from 'react';
import ThumbnailUpload from '../../components/upload/ThumbnailUpload';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { thumbnailUpload, changeField, thumbnailDelete } from '../../modules/upload';


const ThumbnailUploadContainer = () => {


  const dispatch = useDispatch();
  const { thumbnails,loading } = useSelector(({ upload,loading }) => ({
    thumbnails: upload.thumbnails,
    loading:loading['product/THUMBNAIL_UPLOAD'],
  })
  );

  const onDrop = (files) => {
    dispatch(
      thumbnailUpload({
        files
      }))
  };

  const onChange = (e) => {
    console.log('call');
    const { value, name } = e.target;
    dispatch(
      changeField({
        key: name,
        value,
      }),
    );
  };

  const onDelete = (thumbnail) => {
    const currentIndex = thumbnails.indexOf(thumbnail);
    dispatch(thumbnailDelete(currentIndex))
  }

  console.log(thumbnails)
  return <ThumbnailUpload onDrop={onDrop} onDelete={onDelete} images={thumbnails} onChange={onChange} loading={loading} />;
};

export default withRouter(ThumbnailUploadContainer);
