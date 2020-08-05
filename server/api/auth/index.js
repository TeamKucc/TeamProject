import express from 'express'
import * as authctrl from './auth.ctrl'
import authMiddleware from '../../lib/jwtmiddleware'
import authCheck from '../../lib/auth'

const router = express.Router()

router.post('/register', authctrl.register)
router.post('/login',authctrl.login)
router.use('/logout',authCheck)
router.get('/logout')
router.post('/business', authctrl.business)

export default router;
