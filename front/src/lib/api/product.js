import client from "./client"

export const uploadProduct = ({ thumbnails, title, description, price, images, discount, person }) => client.post("/api/product/uploadProduct", { thumbnails, title, description, price, images, discount, person })
export const landingProduct = ({ thumbnails, title, price, discount }) => client.get('/api/product/landingProduct', { thumbnails, title, price, discount })
export const uploadImage = ({formdata,config})=>client.post('/api/product/uploadImage',{formdata,config})