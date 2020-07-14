import express from 'express'
import * as userCtrl from './user.ctrl'

const router = express.Router();

router.get('/list',userCtrl.list)
router.post('/assign-admin/:username',userCtrl.assignAdmin)

export default router;