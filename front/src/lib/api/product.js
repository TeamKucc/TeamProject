import client from './client';

export const productUpload = ({
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
export const stockManagement = ({
  stock,
  thumbnails,
  title,
  price,
  discount,
  enable,
}) =>
  client.get('/api/product/getStock', {
    stock,
    thumbnails,
    title,
    price,
    discount,
    enable,
  });
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
export const productPaid = ({ user, product }) =>
  client.post('/api/product/paid', { user, product });
export const stockDetail = (id) =>
  client.post(`/api/product/stockDetail/${id}`);
export const deliveryUpload = ({ delivery, deliveryNumber }) =>
  client.post('/api/product/deliveryUpload', { delivery, deliveryNumber });
