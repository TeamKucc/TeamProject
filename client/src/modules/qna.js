import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestsaga';
import * as qnaAPI from '../lib/api/qna';
import { takeLatest } from 'redux-saga/effects';

const CHANGE_FIELD = 'qna/CHANGE_FIELD';
const [
  QUESTION_UPLOAD,
  QUESTION_UPLOAD_SUCCESS,
  QUESTION_UPLOAD_FAILURE,
] = createRequestActionTypes('qna/QUESTION_UPLOAD');

export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));

export const questionUpload = createAction(
    QUESTION_UPLOAD,
  ({ user, type, title, question }) => ({ user, type, title, question }),
);

const questionSaga = createRequestSaga(
  QUESTION_UPLOAD,
  qnaAPI.questionUpload,
);

export function* qnaSaga() {
  yield takeLatest(QUESTION_UPLOAD, questionSaga);
}

export const initialState = {
  user: '',
  type: '',
  title: '',
  question: '',
  answer: '',
  qna: '',
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
},
initialState
);

export default qna;