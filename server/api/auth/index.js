import express from 'express';
import * as authctrl from './auth.ctrl';
import authMiddleware from '../../lib/jwtmiddleware';
import authCheck from '../../lib/auth';

const router = express.Router();

router.post('/register', authctrl.register);
router.post('/dregister', authctrl.dregister);
router.get('/getuser',authctrl.getUser)
router.post('/memberDelete',authctrl.memberDelete)
router.post('/memberRecover',authctrl.memberRecover)

router.post('/login', authctrl.login);
router.post('/business', authctrl.business);
router.get('/logout', authCheck, authctrl.logout);


export default router;
