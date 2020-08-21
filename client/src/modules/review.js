import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestsaga';
import * as productAPI from '../lib/api/product';
import { takeLatest, take } from 'redux-saga/effects';

const CHANGE_FIELD = 'review/CHANGE_FIELD'

const [
  REVIEW_UPLOAD,
  REVIEW_UPLOAD_SUCCESS,
  REVIEW_UPLOAD_FAILURE,
] = createRequestActionTypes('review/REVIEW_UPLOAD')

const [
  READ_REVIEW,
  READ_REVIEW_SUCCESS,
  READ_REVIEW_FAILURE,
] = createRequestActionTypes('review/READ_REVIEW');

export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value
}))

export const reviewUpload = createAction(
  REVIEW_UPLOAD,
  ({ user, id, write, rating }) => ({ user, id, write, rating })
)

export const readReview = createAction(READ_REVIEW, (id) => id);

const reviewUploadSaga = createRequestSaga(REVIEW_UPLOAD, productAPI.reviewUpload)
const readReviewSaga = createRequestSaga(READ_REVIEW, productAPI.readReview)

export function* reviewSaga() {
  yield takeLatest(REVIEW_UPLOAD, reviewUploadSaga)
  yield takeLatest(READ_REVIEW, readReviewSaga)
}

const initialState = {
  write: '',
  rating: 0,
  review: {},
  error: null,
};

const landing = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [REVIEW_UPLOAD_SUCCESS]: (state, { payload: review }) => ({
      ...state,
      review
    }),
    [REVIEW_UPLOAD_FAILURE]: (state, { payload : error }) => ({
      ...state,
      error
    }),
    [READ_REVIEW_SUCCESS]: (state, { payload: review }) => ({
      ...state,
      review,
    }),
    [READ_REVIEW_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default landing;
