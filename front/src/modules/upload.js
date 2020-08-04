import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestsaga';
import * as productAPI from '../lib/api/product';
import { takeLatest, call, put } from 'redux-saga/effects';
import { startLoading, finishLoading } from './loading';
import axios from 'axios';
import produce from 'immer';

const INITIALIZE = 'product/INITIALIZE';
const CHANGE_FIELD = 'product/CHANGE_FIELD';
const IMAGE_DELETE = 'product/IMAGE_DELETE';
const THUMBNAIL_DELETE = 'product/THUMBNAIL_DELETE';

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

const [
  PRODUCT_PAID,
  PRODUCT_PAID_SUCCESS,
  PRODUCT_PAID_FAILURE,
] = createRequestActionTypes('product/PRODUCT_PAID');

// const [
//   UPDATE_UPLOAD,
//   UPDATE_UPLOAD_SUCCESS,
//   UPDATE_UPLOAD_FAILURE,
// ] = createRequestActionTypes('product/UPDATE_UPLOAD');

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));

export const imagedDelete = createAction(IMAGE_DELETE, (images) => images);

export const thumbnailDelete = createAction(
  THUMBNAIL_DELETE,
  (images) => images,
);

export const imageUpload = createAction(IMAGE_UPLOAD, (files) => ({
  files,
}));

export const thumbnailUpload = createAction(THUMBNAIL_UPLOAD, (files) => ({
  files,
}));

export const productUpload = createAction(
  PRODUCT_UPLOAD,
  ({
    stock,
    thumbnails,
    title,
    description,
    price,
    images,
    discount,
    person,
  }) => ({
    stock,
    thumbnails,
    title,
    description,
    price,
    images,
    discount,
    person,
  }),
);

export const productPaid = createAction(
  PRODUCT_PAID,
  ({ user, product }) => ({
    user, product
  })
)

// export const updateUpload = createAction(
//   UPDATE_UPLOAD,
//   ({
//     stock,
//     thumbnails,
//     title,
//     description,
//     price,
//     images,
//     discount,
//     person,
//     enable,
//   }) => ({
//     stock,
//     thumbnails,
//     title,
//     description,
//     price,
//     images,
//     discount,
//     person,
//     enable,
//   }),
// );

const productUploadSaga = createRequestSaga(
  PRODUCT_UPLOAD,
  productAPI.productUpload,
);

// const updateUploadSaga = createRequestSaga(
//   UPDATE_UPLOAD,
//   productAPI.updateUpload,
// );

function* imageUploadSaga(action) {
  yield put(startLoading('product/IMAGE_UPLOAD'));
  try {
    const files = action.payload.files.files;
    console.log(files);
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
      payload: image.data,
    });
  } catch (error) {
    yield put({
      type: IMAGE_UPLOAD_FAILURE,
      payload: error,
    });
  }
  yield put(finishLoading('product/IMAGE_UPLOAD'));
}

function* thumbnailUploadSaga(action) {
  yield put(startLoading(THUMBNAIL_UPLOAD));
  try {
    const files = action.payload.files.files;
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
    console.log(thumbnail);
    yield put({
      type: THUMBNAIL_UPLOAD_SUCCESS,
      payload: thumbnail.data,
    });
  } catch (error) {}
  yield put(finishLoading(THUMBNAIL_UPLOAD));
}

export function* productSaga() {
  yield takeLatest(IMAGE_UPLOAD, imageUploadSaga);
  yield takeLatest(THUMBNAIL_UPLOAD, thumbnailUploadSaga);
  yield takeLatest(PRODUCT_UPLOAD, productUploadSaga);
  // yield takeLatest(UPDATE_UPLOAD, updateUploadSaga);
}

export const initialState = {
  stock: 0,
  thumbnails: [],
  title: '',
  description: '',
  price: 0,
  images: [],
  discount: 0,
  person: 0,
  upload: null,
  uploadError: null,
  enable: null,
  paid:null
};

const upload = handleActions(
  {
    [INITIALIZE]: (state) => initialState,
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [IMAGE_DELETE]: (state, { payload: image }) =>
      produce(state, (draft) => {
        draft.images.splice(image, 1);
        return draft;
      }),
    [IMAGE_UPLOAD_SUCCESS]: (state, { payload: image }) =>
      produce(state, (draft) => {
        draft.images.push(image);
        return draft;
      }),
    [IMAGE_UPLOAD_FAILURE]: (state, { payload: uploadError }) => ({
      ...state,
      uploadError,
    }),
    [THUMBNAIL_DELETE]: (state, { payload: image }) =>
      produce(state, (draft) => {
        draft.thumbnails.splice(image, 1);
        return draft;
      }),
    [THUMBNAIL_UPLOAD_SUCCESS]: (state, { payload: thumbnails }) =>
      produce(state, draft => {
        draft.thumbnails.push(thumbnails)
        return draft
      }),
    [THUMBNAIL_UPLOAD_FAILURE]: (state, { payload: uploadError }) => ({
      ...state,
      uploadError,
    }),
    [PRODUCT_UPLOAD_SUCCESS]: (state, { payload: upload }) => ({
      ...state,
      upload,
    }),
    [PRODUCT_UPLOAD_FAILURE]: (state, { payload: uploadError }) => ({
      ...state,
      uploadError,
    }),
    // [SET_ORIGINAL_UPLOAD]: (state, { payload: upload }) => ({
    //   ...state,
    //   stock: upload.stock,
    //   thumbnails: upload.thumbnails,
    //   title: upload.title,
    //   description: upload.description,
    //   price: upload.price,
    //   images: upload.images,
    //   discount: upload.discount,
    //   person: upload.person,
    //   originalProductId: upload._id,
    // }),
    // [UPDATE_UPLOAD_SUCCESS]: (state, { payload: upload }) => ({
    //   ...state,
    //   upload,
    // }),
    // [UPDATE_UPLOAD_FAILURE]: (state, { payload: uploadError }) => ({
    //   ...state,
    //   uploadError,
    // }),
  },
  initialState,
);

export default upload;
