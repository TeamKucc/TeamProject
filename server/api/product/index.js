<<<<<<< HEAD
import express from 'express';
import * as productCtrl from './product.ctrl';

const router = express.Router();

router.post('/uploadImage', productCtrl.uploadImage);
router.post('/uploadThumbnail', productCtrl.uploadThumbnail);
router.post('/uploadProduct', productCtrl.uploadProduct);
router.get('/getProducts', productCtrl.getProducts);

export default router;
=======
const express = require('express');
const router = express.Router();
const { Product } = require('../../models/product');
const multer = require('multer');

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if (ext !== '.jpg' || ext !== '.png') {
      return cb(res.status(400).end('only jpg, png are allowed'), false);
    }
    cb(null, true);
  },
});

var upload = multer({ storage: storage }).single('file');

router.post('/uploadImage', (req, res) => {
  console.log(req);
  upload(req, res, (err) => {
    if (err) {
      return res.json({ success: false, err });
    }
    return res.json({
      success: true,
      image: res.req.file.path,
      fileName: res.req.file.filename,
    });
  });
});

// router.post('/uploadProduct', (req, res) => {
//   //save all the data we got from the client into the DB
//   const product = new Product(req.body);

//   product.save((err) => {
//     if (err) return res.status(400).json({ success: false, err });
//     return res.status(200).json({ success: true });
//   });
// });

module.exports = router;
>>>>>>> 173e0f07595014dd2b535d0d6b2189995cf14739
