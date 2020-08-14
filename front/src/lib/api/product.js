import client from './client';

export const productUpload = ({
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
}) =>
  client.post('/api/product/productUpload', {
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
  });
export const landingProduct = ({
  thumbnails,
  title,
  price,
  discount,
  category,
}) =>
  client.get('/api/product/getProducts', {
    thumbnails,
    title,
    price,
    discount,
    category,
  });
export const stockManagement = (
  seller,
) =>
  client.post('/api/product/getStock', seller);

export const updateUpload = ({
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
  category,
}) =>
  client.post('/api/product/updateUpload', {
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
    category,
  });
export const readProduct = (id) =>
  client.post(`/api/product/readProduct/${id}`);
export const removeProduct = ({ _id }) => client.delete(`/api/product/${_id}`);

export const productPaid = ({ user, product,detail,seller }) =>
  client.post('/api/product/paid', { user, product,detail,seller });
export const stockDetail = (id) =>

  client.post(`/api/product/stockDetail/${id}`);
export const deliveryUpload = ({ delivery, deliveryNumber }) =>
  client.post('/api/product/deliveryUpload', { delivery, deliveryNumber });

export const sellerPaid = ({ product, user }) =>
  client.post('/api/product/sellerPaid', { product, user })

export const findDeal = _id =>
  client.post('/api/user/findDeal', { _id })

export const searchProduct = (id) => client.post(`/api/product/searchProduct/${id}`)