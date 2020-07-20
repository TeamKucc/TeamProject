import express from 'express';
import auth from './auth'
import user from './user'
import authCheck from '../lib/auth';

const router =express.Router();

router.use('/auth',auth);
router.use('/user',user)

export default router;