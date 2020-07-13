import express from 'express'
import ctrl from './auth.ctrl'

const router =express.Router()

router.post('/register',ctrl.register)

module.exports =router
