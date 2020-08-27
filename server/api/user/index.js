import express from 'express'
import * as userCtrl from './user.ctrl'


const router = express.Router();

router.get('/list',userCtrl.list)
router.get('/userinfo/:_id',userCtrl.userInfo)
router.post('/userUpdate',userCtrl.userUpdate)
router.post('/roleCheck',userCtrl.roleCheck)

router.post('/gethistory',userCtrl.gethistory)
router.post('/sellerHistory',userCtrl.sellHistory)

router.post('/makeDeal',userCtrl.makeDeal)
router.post('/findDeal',userCtrl.findDeal)
router.post('/joinDeal',userCtrl.joinDeal)
router.post('/checkDeal',userCtrl.checkDeal)

router.post('/endDeal',userCtrl.endDeal)


export default router;