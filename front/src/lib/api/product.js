import client from "./client"

export const productUpload = ({ user,thumbnails, title, description, price, images, discount, person }) => client.post("/api/product/productUpload", { user,thumbnails, title, description, price, images, discount, person })
export const landingProduct = ({ thumbnails, title, price, discount }) => client.get('/api/product/getProducts', { thumbnails, title, price, discount })
export const readProduct = ({_id})=>client.post('/api/product/readProduct',{_id})
export const stockManagement = ({ stock, thumbnails, title, price, discount }) => client.get('/api/product/getStock', { stock, thumbnails, title, price, discount })
export const updateUpload = ({ stock, thumbnails, title, description, price, images, discount, person, enable }) => client.post("/api/product/updateUpload", { stock, thumbnails, title, description, price, images, discount, person, enable })
export const removeProduct = ({ _id }) => client.delete(`/api/product/${_id}`)