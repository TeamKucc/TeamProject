import client from "./client"

export const productUpload = ({ stock, thumbnails, title, description, price, images, discount, person, enable }) => client.post("/api/product/productUpload", { stock, thumbnails, title, description, price, images, discount, person, enable })
export const landingProduct = ({ thumbnails, title, price, discount }) => client.get('/api/product/getProducts', { thumbnails, title, price, discount })
export const stockManagement = ({ stock, thumbnails, title, price, discount, enable }) => client.get('/api/product/getStock', { stock, thumbnails, title, price, discount, enable })
export const updateUpload = ({ stock, thumbnails, title, description, price, images, discount, person, enable }) => client.post("/api/product/updateUpload", { stock, thumbnails, title, description, price, images, discount, person, enable })
export const readProduct = ({_id})=>client.post('/api/product/readProduct',{_id})
export const removeProduct = ({ _id }) => client.delete(`/api/product/${_id}`)