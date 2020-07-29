import client from "./client"

export const productUpload = ({ thumbnails, title, description, price, images, discount, person }) => client.post("/api/product/productUpload", { thumbnails, title, description, price, images, discount, person })
export const landingProduct = ({ thumbnails, title, price, discount }) => client.get('/api/product/productLanding', { thumbnails, title, price, discount })
export const readProduct = ({_id})=>client.post('/api/product/readProduct',{_id})
export const stockManagement = ({ stock, thumbnails, title, price, discount }) => client.get('/api/product/getStock', { stock, thumbnails, title, price, discount })