import express from 'express';
import * as qnaCtrl from './qna.ctrl';

const router = express.Router();

router.post('/questionUpload', qnaCtrl.questionUpload);
router.post('/answerUpload', qnaCtrl.answerUpload);
router.post('/qnaDetail/:id', qnaCtrl.qnaDetail);
router.get('/readQnA', qnaCtrl.readQnA);

export default router;