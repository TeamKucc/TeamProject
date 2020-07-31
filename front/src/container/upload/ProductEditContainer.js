import React, { useEffect } from 'react';
import ProductEdit from '../../components/upload/ProductEdit';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { changeField, productUpload } from '../../modules/upload';
import { readProduct, unloadProduct } from '../../modules/landing';
import { updateUpload } from '../../modules/upload';

const ProductEditContainer = ({ match, history }) => {
  const dispatch = useDispatch();
  const {
    stock,
    thumbnails,
    title,
    description,
    price,
    images,
    discount,
    person,
    enable,
    product,
  } = useSelector(({ upload, landing }) => ({
    stock: upload.stock,
    thumbnails: upload.thumbnails,
    title: upload.title,
    description: upload.description,
    price: upload.price,
    images: upload.images,
    discount: upload.discount,
    person: upload.person,
    enable: upload.enable,
    product: landing.productDetail,
  }));

  const { id } = match.params;
  useEffect(() => {
    dispatch(readProduct(id))
    return () => {
      dispatch(unloadProduct());
    };
  }, [dispatch]);

  console.log();
  const onPublish = (e) => {
    e.preventDefault();
    dispatch(
      updateUpload({
        id,
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
    )
    history.push('/product/stock');
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
      <ProductEdit
        onPublish={onPublish}
        onChange={onChange}
        product={product}
        description = {description}
      />
    </div>
  );
};

export default withRouter(ProductEditContainer);
