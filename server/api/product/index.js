import express from 'express';
import * as productCtrl from './product.ctrl';

const router = express.Router();

router.post('/uploadImage', productCtrl.uploadImage);
router.post('/uploadThumbnail', productCtrl.uploadThumbnail);

router.post('/productUpload', productCtrl.productUpload);
router.post('/updateUpload', productCtrl.updateUpload)
router.post('/searchProduct/:id', productCtrl.searchProduct)

router.get('/getProducts', productCtrl.getProducts);
router.post('/readProduct/:id',productCtrl.readProduct)
router.post('/stockDetail/:id', productCtrl.stockDetail)

router.get('/config',productCtrl.config)
router.post('/getStock', productCtrl.getStock)
router.post('/getDeal',productCtrl.getDeal)

router.post('/paid',productCtrl.productPaid)
router.get('/userPaid')
router.get('/productPaidSeller',productCtrl.productPaidSeller)

router.post('/deliveryUpload', productCtrl.deliveryUpload)

router.post('/review', productCtrl.reviewProduct)
router.get('/reviewProduct', productCtrl.reviewProduct)

export default router;
