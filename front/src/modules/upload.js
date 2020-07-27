import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestsaga';
import * as productAPI from '../lib/api/product';
import { takeLatest, call, put } from 'redux-saga/effects';
import { startLoading, finishLoading } from './loading';
import axios from 'axios';

const INITIALIZE = 'product/INITIALIZE';
const CHANGE_FIELD = 'product/CHANGE_FIELD';

const [
  IMAGE_UPLOAD,
  IMAGE_UPLOAD_SUCCESS,
  IMAGE_UPLOAD_FAILURE,
] = createRequestActionTypes('product/IMAGE_UPLOAD');

const [
  THUMBNAIL_UPLOAD,
  THUMBNAIL_UPLOAD_SUCCESS,
  THUMBNAIL_UPLOAD_FAILURE,
] = createRequestActionTypes('product/THUMBNAIL_UPLOAD');

const [
  PRODUCT_UPLOAD,
  PRODUCT_UPLOAD_SUCCESS,
  PRODUCT_UPLOAD_FAILURE,
] = createRequestActionTypes('product/PRODUCT_UPLOAD');
const SET_ORIGINAL_UPLOAD = 'product/SET_ORIGINAL_UPLOAD';

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));

export const imageUpload = createAction(IMAGE_UPLOAD, (files) => ({
  files,
}));

export const thumbnailUpload = createAction(THUMBNAIL_UPLOAD, (files) => ({
  files,
}));

export const productUpload = createAction(
  PRODUCT_UPLOAD,
  ({ thumbnails, title, description, price, images, discount, person }) => ({
    thumbnails,
    title,
    description,
    price,
    images,
    discount,
    person,
  }),
);

export const setOriginalUpload = createAction(
  SET_ORIGINAL_UPLOAD,
  (upload) => upload,
);

// const imageUploadSaga = createRequestSaga(IMAGE_UPLOAD, productAPI.imageUpload);
const productUploadSaga = createRequestSaga(
  PRODUCT_UPLOAD,
  productAPI.productUpload,
);

function* imageUploadSaga(action) {
  yield put(startLoading(IMAGE_UPLOAD));
  const files = action.payload.files.files;
  try {
    let formData = new FormData();
    const config = {
      header: { 'content-type': 'multipart/form-data' },
    };
    formData.append('file', files[0]);
    const image = yield call(
      [axios, 'post'],
      '/api/product/uploadImage',
      formData,
      config,
    );
    yield put({
      type: IMAGE_UPLOAD_SUCCESS,
      payload: image.data.image,
    });
  } catch (error) {}
  yield put(finishLoading(IMAGE_UPLOAD));
}

function* thumbnailUploadSaga(action) {
  yield put(startLoading(THUMBNAIL_UPLOAD));
  const files = action.payload.files.files;
  try {
    let formData = new FormData();
    const config = {
      header: { 'content-type': 'multipart/form-data' },
    };
    formData.append('file', files[0]);
    const thumbnail = yield call(
      [axios, 'post'],
      '/api/product/uploadThumbnail',
      formData,
      config,
    );
   
    yield put({
      type: THUMBNAIL_UPLOAD_SUCCESS,
      payload: thumbnail.data.image,
    });
  } catch (error) {}
  yield put(finishLoading(THUMBNAIL_UPLOAD));
}

export function* productSaga() {
  yield takeLatest(IMAGE_UPLOAD, imageUploadSaga);
  yield takeLatest(THUMBNAIL_UPLOAD, thumbnailUploadSaga);
  yield takeLatest(PRODUCT_UPLOAD, productUploadSaga);
}

export const initialState = {
  thumbnails: [],
  title: '',
  description: '',
  price: 0,
  images: [],
  discount: 0,
  person: 0,
  upload: null,
  uploadError: null,
};

const upload = handleActions(
  {
    [INITIALIZE]: (state) => initialState,
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [IMAGE_UPLOAD]: (state) => ({
      ...state,
      product: null,
      postError: null,
    }),
    [IMAGE_UPLOAD_SUCCESS]: (state, action) => ({
      ...state,
      images: action.payload,
    }),
    [IMAGE_UPLOAD_FAILURE]: (state, { payload: uploadError }) => ({
      ...state,
      uploadError,
    }),
    [THUMBNAIL_UPLOAD]: (state) => ({
      ...state,
      product: null,
      postError: null,
    }),
    [THUMBNAIL_UPLOAD_SUCCESS]: (state, action) => ({
      ...state,
      thumbnails: action.payload,
    }),
    [THUMBNAIL_UPLOAD_FAILURE]: (state, { payload: uploadError }) => ({
      ...state,
      uploadError,
    }),
    [PRODUCT_UPLOAD]: (state) => ({
      ...state,
      upload: null,
      uploadError: null,
    }),
    [PRODUCT_UPLOAD_SUCCESS]: (state, action) => ({
      ...state,
      upload: action.payload,
    }),
    [PRODUCT_UPLOAD_FAILURE]: (state, { payload: uploadError }) => ({
      ...state,
      uploadError,
    }),
    [SET_ORIGINAL_UPLOAD]: (state, { payload: upload }) => ({
      ...state,
      thumbnails: upload.thumbnails,
      title: upload.title,
      description: upload.description,
      price: upload.price,
      images: upload.images,
      discount: upload.discount,
      person: upload.person,
    }),
  },
  initialState,
);

export default upload;
