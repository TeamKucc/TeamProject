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
const PAYMENT_CHANGE_FIELD = 'product/PAYMENT_CHANGE_FIELD';
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
const SET_ORIGINAL_UPLOAD = 'product/SET_ORIGINAL_UPLOAD';

const [
  UPDATE_UPLOAD,
  UPDATE_UPLOAD_SUCCESS,
  UPDATE_UPLOAD_FAILURE,
] = createRequestActionTypes('product/UPDATE_UPLOAD');

const [
  SELLER_PAID,
  SELLER_PAID_SUCCESS,
  SELLER_PAID_FAILURE,
] = createRequestActionTypes('product/SELLER_PAID');

const [
  FIND_DEAL,
  FIND_DEAL_SUCCESS,
  FIND_DEAL_FAILURE,
] = createRequestActionTypes('product/FIND_DEAL');

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));

export const paymentChangeField = createAction(
  PAYMENT_CHANGE_FIELD,
  ({ form, key, value }) => ({
    form,
    key,
    value,
  }),
);

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

export const sellerPaid = createAction(SELLER_PAID, ({ product, user }) => ({
  product,
  user,
}));

export const productUpload = createAction(
  PRODUCT_UPLOAD,
  ({
    seller,
    stock,
    thumbnails,
    title,
    description,
    price,
    images,
    discount,
    person,
    category,
  }) => ({
    seller,
    stock,
    thumbnails,
    title,
    description,
    price,
    images,
    discount,
    person,
    category,
  }),
);

export const productPaid = createAction(
  PRODUCT_PAID,
  ({ user, product, detail, seller, productInfo, payInfo }) => ({
    user,
    product,
    detail,
    seller,
    productInfo,
    payInfo,
  }),
);
export const setOriginalUpload = createAction(
  SET_ORIGINAL_UPLOAD,
  (upload) => upload,
);

export const updateUpload = createAction(
  UPDATE_UPLOAD,
  ({
    id,
    stock,
    thumbnails,
    title,
    description,
    price,
    images,
    discount,
    person,
    enable,
    category,
  }) => ({
    id,
    stock,
    thumbnails,
    title,
    description,
    price,
    images,
    discount,
    person,
    enable,
    category,
  }),
);

export const findDeal = createAction(FIND_DEAL, (_id) => _id);

const productUploadSaga = createRequestSaga(
  PRODUCT_UPLOAD,
  productAPI.productUpload,
);

const productPaidSaga = createRequestSaga(PRODUCT_PAID, productAPI.productPaid);

const updateUploadSaga = createRequestSaga(
  UPDATE_UPLOAD,
  productAPI.updateUpload,
);
// const updateUploadSaga = createRequestSaga(
//   UPDATE_UPLOAD,
//   productAPI.updateUpload,
// );

const findDealSaga = createRequestSaga(FIND_DEAL, productAPI.findDeal);

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
  yield takeLatest(UPDATE_UPLOAD, updateUploadSaga);
  yield takeLatest(PRODUCT_PAID, productPaidSaga);
  yield takeLatest(UPDATE_UPLOAD, updateUploadSaga);
  yield takeLatest(FIND_DEAL, findDealSaga);
}

export const initialState = {
  productId: null,
  stock: '',
  thumbnails: [],
  title: '',
  description: '',
  price: '',
  images: [],
  discount: '',
  person: '',
  upload: null,
  uploadError: null,
  enable: null,
  paid: null,
  category: '',
  deal: null,
  error: null,
  detail: {
    person: '',
    address: '',
    phone: '',
    request: '',
  },
  payInfo: {
    person: '',
    address: '',
    phone: '',
    request: '',
    message: '',
  },
};

const upload = handleActions(
  {
    [INITIALIZE]: (state) => initialState,
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [PAYMENT_CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
            produce(state, draft => { draft[form][key] = value }),
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
      produce(state, (draft) => {
        draft.thumbnails.push(thumbnails);
        return draft;
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
    [PRODUCT_PAID_SUCCESS]: (state, { payload: paid }) => ({
      ...state,
      paid,
    }),
    [PRODUCT_PAID_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [SET_ORIGINAL_UPLOAD]: (state, { payload: upload }) => ({
      ...state,
      stock: upload.stock,
      thumbnails: upload.thumbnails,
      title: upload.title,
      description: upload.description,
      price: upload.price,
      images: upload.images,
      discount: upload.discount,
      person: upload.person,
      productId: upload._id,
    }),
    [UPDATE_UPLOAD_SUCCESS]: (state, { payload: upload }) => ({
      ...state,
      upload,
    }),
    [UPDATE_UPLOAD_FAILURE]: (state, { payload: uploadError }) => ({
      ...state,
      uploadError,
    }),
    [SET_ORIGINAL_UPLOAD]: (state, { payload: upload }) => ({
      ...state,
      stock: upload.stock,
      thumbnails: upload.thumbnails,
      title: upload.title,
      description: upload.description,
      price: upload.price,
      images: upload.images,
      discount: upload.discount,
      person: upload.person,
      productId: upload._id,
    }),
    [UPDATE_UPLOAD_SUCCESS]: (state, { payload: upload }) => ({
      ...state,
      upload,
    }),
    [UPDATE_UPLOAD_FAILURE]: (state, { payload: uploadError }) => ({
      ...state,
      uploadError,
    }),
    [FIND_DEAL_SUCCESS]: (state, { payload: deal }) => ({
      ...state,
      deal,
    }),
    [FIND_DEAL_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default upload;
