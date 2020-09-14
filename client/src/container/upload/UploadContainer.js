import React, { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  productUpload,
  changeField,
  updateUpload,
  imageUpload,
  imagedDelete,
  thumbnailUpload,
  thumbnailDelete
} from '../../modules/upload';
import UploadProduct from '../../components/upload/UploadProduct';

const UploadContainer = ({ history }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  const {
    seller,
    stock,
    thumbnails,
    title,
    description,
    price,
    images,
    discount,
    person,
    enable,
    productId,
    category,
    admit
  } = useSelector(({ upload, user }) => ({
    seller: user.user,
    stock: upload.stock,
    thumbnails: upload.thumbnails,
    title: upload.title,
    description: upload.description,
    price: upload.price,
    images: upload.images,
    discount: upload.discount,
    person: upload.person,
    enable: upload.enable,
    productId: upload.productId,
    category: upload.category,
    admit:user.admit,
  }));

  const product = {
    stock,
    thumbnails,
    title,
    description,
    price,
    images,
    discount,
    person,
    enable,
    category,
  };

  const onPublish = (e) => {
    e.preventDefault();

    if([title, description, price, discount, stock, category].includes('')) {
      setError('빈칸을 모두 입력해주세요')
      return
    }

    if(images[0] == null) {
      setError('이미지를 등록해주세요')
      return
    }

    if(thumbnails[0] == null) {
      setError('썸네일 등록해주세요')
      return
    }

    if (productId) {
      dispatch(
        updateUpload({
          id: productId,
          stock,
          thumbnails,
          title,
          description,
          price,
          images,
          discount,
          person,
          enable:true,
          category,
        }))
    }
    dispatch(
      productUpload({
        seller,
        stock,
        thumbnails,
        title,
        description,
        price,
        images,
        discount,
        person,
        enable,
        category,
      }),
      alert("제품이 등록되었습니다!"),
      history.push('/product/stock'),
      window.location.reload()
    );
  };

  const onChange = (e) => {
    console.log(e.target);
    const { value, name } = e.target;
    dispatch(
      changeField({
        key: name,
        value,
      }),
    );
  };

  const imageDrop = (files) => {
    console.log(files)
    dispatch(
      imageUpload({
        files
      }))
  }

  const imageDelete = (image) => {
    const currentIndex = images.indexOf(image);
    dispatch(imagedDelete(currentIndex))
  }

  const thumbnailDrop = (files) => {
    dispatch(
      thumbnailUpload({
        files
      }))
  };

  const thumbDelete = (thumbnail) => {
    const currentIndex = thumbnails.indexOf(thumbnail);
    dispatch(thumbnailDelete(currentIndex))
  }


  return (
    <UploadProduct
      onPublish={onPublish}
      onChange={onChange}
      product={product}
      imageDrop={imageDrop}
      imageDelete={imageDelete}
      images={images}
      thumbnailDrop={thumbnailDrop} 
      thumbnailDelete={thumbDelete}
      thumbnails={thumbnails}
      error={error}
    />
  );
};

export default withRouter(UploadContainer);
