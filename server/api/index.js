import express from 'express';
import user from './user/index';
import product from './product/index';

const router = express.Router();

router.use('/user', user);
router.use('/product', product);

export default router;
