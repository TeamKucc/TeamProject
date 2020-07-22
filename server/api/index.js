import express from 'express';
<<<<<<< HEAD
import auth from './auth'
import user from './user'
import authCheck from '../lib/auth';
=======
import user from './user/index';
import product from './product/index';
>>>>>>> 173e0f07595014dd2b535d0d6b2189995cf14739

const router = express.Router();

<<<<<<< HEAD
router.use('/auth',auth);
router.use('/user',user)
router.use('/product', product);
export default router;
=======
router.use('/user', user);
router.use('/product', product);

export default router;
>>>>>>> 173e0f07595014dd2b535d0d6b2189995cf14739
