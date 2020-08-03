import express from 'express'
import * as userCtrl from './user.ctrl'

const router = express.Router();

router.get('/list',userCtrl.list)
router.get('/userinfo/:_id',userCtrl.userInfo)
router.post('/userUpdate',userCtrl.userUpdate)
router.post('/gethistory',userCtrl.gethistory)

export default router;