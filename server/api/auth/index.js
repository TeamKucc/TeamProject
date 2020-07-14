import express from 'express'
import * as authctrl from './auth.ctrl'
import authMiddleware from '../../lib/jwtmiddleware'

const router = express.Router()

router.post('/register', authctrl.register)
router.post('/login',authctrl.login)
router.get('/check',authMiddleware,authctrl.check)

export default router;
