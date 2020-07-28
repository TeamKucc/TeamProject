
import express from 'express';
import * as productCtrl from './product.ctrl';

const router = express.Router();

router.post('/uploadImage', productCtrl.uploadImage);
router.post('/uploadThumbnail', productCtrl.uploadThumbnail);
router.post('/productUpload', productCtrl.productUpload);
router.get('/getProducts', productCtrl.getProducts);
router.get('/getStock', productCtrl.getStock)

export default router;
