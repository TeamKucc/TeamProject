import express from 'express';

import auth from './auth';
import user from './user';
import authCheck from '../lib/auth';
import product from './product';

const router = express.Router();

router.use('/auth', auth);
router.use('/user', user);
router.use('/product', product);

export default router;
