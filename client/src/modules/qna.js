import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestsaga';
import * as qnaAPI from '../lib/api/qna';

const CHANGE_FIELD = 'qna/CHANGE_FIELD';

const [
  QUESTION_UPLOAD,
  QUESTION_UPLOAD_SUCCESS,
  QUESTION_UPLOAD_FAILURE,
] = createRequestActionTypes('qna/QUESTION_UPLOAD');

const [
  ANSWER_UPLOAD,
  ANSWER_UPLOAD_SUCCESS,
  ANSWER_UPLOAD_FAILURE,
] = createRequestActionTypes('qna/ANSWER_UPLOAD');

const [
  READ_QNA,
  READ_QNA_SUCCESS,
  READ_QNA_FAILURE,
] = createRequestActionTypes('qna/READ_QNA');

const [
  QNA_DETAIL,
  QNA_DETAIL_SUCCESS,
  QNA_DETAIL_FAILURE,
] = createRequestActionTypes('qna/QNA_DETAIL')

export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));

export const questionUpload = createAction(
    QUESTION_UPLOAD,
  ({ user, type, title, question }) => ({ user, type, title, question }),
);

export const answerUpload = createAction(
  ANSWER_UPLOAD,
({ id, answer }) => ({ id, answer }),
);

export const readQnA = createAction(
  READ_QNA,
  ({ user, type, title, created }) => ({ user, type, title, created }),
);

export const qnaDetail = createAction(
  QNA_DETAIL,
  id => id,
)

const questionSaga = createRequestSaga(
  QUESTION_UPLOAD,
  qnaAPI.questionUpload,
);

const answerSaga = createRequestSaga(
  ANSWER_UPLOAD,
  qnaAPI.answerUpload,
);

const readQnASaga = createRequestSaga(
  READ_QNA,
  qnaAPI.readQnA,
)

const qnaDetailSaga = createRequestSaga(
  QNA_DETAIL,
  qnaAPI.qnaDetail,
)

export function* qnaSaga() {
  yield takeLatest(QUESTION_UPLOAD, questionSaga);
  yield takeLatest(READ_QNA, readQnASaga);
  yield takeLatest(QNA_DETAIL, qnaDetailSaga);
  yield takeLatest(ANSWER_UPLOAD, answerSaga);
}

export const initialState = {
  user: '',
  type: '',
  title: '',
  question: '',
  answer: '',
  qna: {},
};

const qna = handleActions(
  {
  [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
    ...state,
    [key]: value,
  }),
  [QUESTION_UPLOAD_SUCCESS]: (state, { payload: qna }) => ({
    ...state,
    qna,
  }),
  [QUESTION_UPLOAD_FAILURE]: (state, { payload: error }) => ({
    ...state,
    error,
  }),
  [READ_QNA_SUCCESS]: (state, { payload: qna }) => ({
    ...state,
    qna,
  }),
  [READ_QNA_FAILURE]: (state, { payload: error }) => ({
    ...state,
    error,
  }),
  [QNA_DETAIL_SUCCESS]: (state, { payload: qna }) => ({
    ...state,
    qna
  }),
  [QNA_DETAIL_FAILURE]: (state, { payload: error }) => ({
    ...state,
    error,
  }),
  [ANSWER_UPLOAD_SUCCESS]: (state, { payload: answer }) => ({
    ...state,
    answer,
  }),
  [ANSWER_UPLOAD_FAILURE]: (state, { payload: error }) => ({
    ...state,
    error,
  }),
},
initialState
);

export default qna;