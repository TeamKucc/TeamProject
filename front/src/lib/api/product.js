import client from "./client"

<<<<<<< HEAD
export const productUpload = ({ thumbnails, title, description, price, images, discount, person }) => client.post("/api/product/productUpload", { thumbnails, title, description, price, images, discount, person })
=======
export const productUpload = ({ stock, thumbnails, title, description, price, images, discount, person }) => client.post("/api/product/productUpload", { stock, thumbnails, title, description, price, images, discount, person })
>>>>>>> dd1cd217c9a055a789a75bbab17c85234b2bc22c
export const landingProduct = ({ thumbnails, title, price, discount }) => client.get('/api/product/getProducts', { thumbnails, title, price, discount })
export const readProduct = ({_id})=>client.post('/api/product/readProduct',{_id})
export const stockManagement = ({ stock, thumbnails, title, price, discount }) => client.get('/api/product/getStock', { stock, thumbnails, title, price, discount })