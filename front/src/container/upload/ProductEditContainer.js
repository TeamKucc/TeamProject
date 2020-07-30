import React, { useEffect } from 'react';
import ProductEdit from '../../components/upload/ProductEdit';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { changeField, setOriginalUpload } from '../../modules/upload';

const ProductEditContainer = ({ match, history }) => {
  const dispatch = useDispatch();

  const { productId } = match.params;

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
    enable: upload.enable,
  }));

  // useEffect(() => {
  //   dispatch(readPost(productId));
  //   return () => {
  //     dispatch(unloadPost());
  //   };
  // }, [dispatch, productId]);

  const onPublish = (e) => {
    e.preventDefault();
    dispatch(
      setOriginalUpload({
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
      }),
    )
    history.push('/product/stock')
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

  return (
    <div>
      <ProductEdit onPublish={onPublish} onChange={onChange} />
    </div>
  );
};

export default withRouter(ProductEditContainer);
