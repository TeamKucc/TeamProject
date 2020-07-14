import express from 'express';
import auth from './auth'
import user from './user'
import authMiddleware from '../lib/jwtmiddleware';

const router =express.Router();

router.use('/auth',auth);
router.use('/user',authMiddleware);
router.use('/user',user)

export default router;