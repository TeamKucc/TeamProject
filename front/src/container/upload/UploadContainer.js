import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { productUpload, changeField } from '../../modules/upload';
import UploadProduct from '../../components/upload/UploadProduct2';

const UploadContainer = ({ history }) => {
  const dispatch = useDispatch();

  const {
    user,
    stock,
    thumbnails,
    title,
    description,
    price,
    images,
    discount,
    person,
    upload,
    uploadError,
    enable,
  } = useSelector(({ upload, user }) => ({
    user: user.user,
    stock: upload.stock,
    thumbnails: upload.thumbnails,
    title: upload.title,
    description: upload.description,
    price: upload.price,
    images: upload.images,
    discount: upload.discount,
    person: upload.person,
    upload: upload.upload,
    uploadError: upload.uploadError,
    enable: upload.enable
  }));

  const onPublish = (e) => {
    e.preventDefault();
    dispatch(
      productUpload({
        user,
        stock,
        thumbnails,
        title,
        description,
        price,
        images,
        discount,
        person,
        enable,
      }),
    );
    history.push('/')
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

  useEffect(() => {
    if (uploadError) {
      console.log(uploadError);
    }
  }, [history, upload, uploadError]);

  return <UploadProduct onPublish={onPublish} onChange={onChange} />;
};

export default withRouter(UploadContainer);