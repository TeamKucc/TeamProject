
import express from 'express';
import * as productCtrl from './product.ctrl';

const router = express.Router();

router.post('/uploadImage', productCtrl.uploadImage);
router.post('/uploadThumbnail', productCtrl.uploadThumbnail);
router.post('/uploadProduct', productCtrl.uploadProduct);
router.get('/getProducts', productCtrl.getProducts);

export default router;
