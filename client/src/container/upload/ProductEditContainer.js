import React, { useEffect } from 'react';
import ProductEdit from '../../components/upload/ProductEdit';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { changeField } from '../../modules/landing';
import { readProduct, unloadProduct } from '../../modules/landing';
import { updateUpload } from '../../modules/landing';

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
    product: landing.productInfo
  }));

  const { id } = match.params;

  useEffect( () => {
    dispatch(readProduct(id))
    dispatch(changeField({
      form:'productInfo',
      key: price,
    }))
    return () => {
      // dispatch(unloadProduct());
    };
  }, [dispatch]);

  enable = true;
  const onPublish = async (e) => {
    e.preventDefault();
    await dispatch(
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
    // await dispatch(initialize())
    history.push('/product/stock');
  };

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form:'productInfo',
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
