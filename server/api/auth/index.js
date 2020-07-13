import express from 'express'
import * as authctrl from './auth.ctrl'

const router = express.Router()

router.post('/register', authctrl.register)
router.post('/login',authctrl.login)

export default router;
