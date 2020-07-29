import client from "./client"

export const productUpload = ({ thumbnails, title, description, price, images, discount, person }) => client.post("/api/product/productUpload", { thumbnails, title, description, price, images, discount, person })
<<<<<<< HEAD
export const landingProduct = ({ thumbnails, title, price, discount }) => client.get('/api/product/productLanding', { thumbnails, title, price, discount })
export const readProduct = ({_id})=>client.post('/api/product/readProduct',{_id})
=======
export const landingProduct = ({ thumbnails, title, price, discount }) => client.get('/api/product/getProducts', { thumbnails, title, price, discount })
>>>>>>> origin/master
