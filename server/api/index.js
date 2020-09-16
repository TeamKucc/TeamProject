import express from 'express';

import auth from './auth';
import user from './user';
import product from './product';
import qna from './qna';

const router = express.Router();

router.use('/auth', auth);
router.use('/user', user);
router.use('/product', product);
router.use('/qna', qna);

export default router;
