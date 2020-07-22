import { createAction, handleActions } from 'redux-actions'
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestsaga'
import * as productAPI from '../lib/api/product'
import { takeLatest } from 'redux-saga/effects';

const INITIALIZE = 'upload/INITIALIZE';
const CHANGE_FIELD = 'upload/CHANGE_FIELD';
const [
  UPLOAD_IMAGE,
  UPLOAD_IMAGE_SUCCESS,
  UPLOAD_IMAGE_FAILURE,
] = createRequestActionTypes('upload/UPLOAD_IMAGE');

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
export const uploadImage = createAction(UPLOAD_IMAGE);

const uploadImageSaga = createRequestSaga(UPLOAD_IMAGE, productAPI.uploadImage);

export function* uploadSaga() {
  yield takeLatest(UPLOAD_IMAGE, uploadImageSaga);
}

const initialState = {
product:{	
	thumbnails:[], 
	images:[], 
},
imagePath:"",
};

const upload = handleActions(
  {
    [INITIALIZE]: (state) => initialState,
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [UPLOAD_IMAGE]: (state) => ({
      ...state,
      product: null,
      postError: null,
    }),
    [UPLOAD_IMAGE_SUCCESS]: (state, { payload: path }) => ({
      ...state,
      imagePath : path,
    }),
    [UPLOAD_IMAGE_FAILURE]: (state, { payload: productError }) => ({
      ...state,
      productError,
    }),
  },
  initialState
);

export default upload;