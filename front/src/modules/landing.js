import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestsaga';
import * as productAPI from '../lib/api/product';
import { takeLatest, take } from 'redux-saga/effects';
import produce from 'immer'

const INITIALIZE = 'product/INITIALIZE';

const [
  LANDING_PRODUCT,
  LANDING_PRODUCT_SUCCESS,
  LANDING_PRODUCT_FAILURE,
] = createRequestActionTypes('landing/LANDING_PRODUCT');

const [
  READ_PRODUCT,
  READ_PRODUCT_SUCCESS,
  READ_PRODUCT_FAILURE,
] = createRequestActionTypes('read/READ_PRODUCT');

const UNLOAD_PRODUCT = 'unload/UNLOAD_PRODUCT';
const CHANGE_FIELD = 'product/CHANGE_FIELD';

const [
  UPDATE_UPLOAD,
  UPDATE_UPLOAD_SUCCESS,
  UPDATE_UPLOAD_FAILURE,
] = createRequestActionTypes('product/UPDATE_UPLOAD');

export const initialize = createAction(INITIALIZE);

export const landingProduct = createAction(
  LANDING_PRODUCT,
  ({ thumbnails, title, price, discount }) => ({
    thumbnails,
    title,
    price,
    discount,
  }),
);

export const readProduct = createAction(READ_PRODUCT, (_id) => _id);

export const unloadProduct = createAction(UNLOAD_PRODUCT);

export const changeField = createAction(CHANGE_FIELD, ({ form, key, value }) => ({
  form,
  key,
  value,
}));

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
  }),
);

const landingProductSaga = createRequestSaga(
  LANDING_PRODUCT,
  productAPI.landingProduct,
);
const readProductSaga = createRequestSaga(READ_PRODUCT, productAPI.readProduct);

const updateUploadSaga = createRequestSaga(
  UPDATE_UPLOAD,
  productAPI.updateUpload,
);

export function* landingSaga() {
  yield takeLatest(LANDING_PRODUCT, landingProductSaga);
  yield takeLatest(READ_PRODUCT, readProductSaga);
  yield takeLatest(UPDATE_UPLOAD, updateUploadSaga);
}

const initialState = {
  landing: {},
  error: null,
  product: null,
  productDetail: null,
  productInfo:{}
};

const landing = handleActions(
  {
    [INITIALIZE]: (state) => initialState,
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
    produce(state, draft => { draft[form][key] = value }),
    [LANDING_PRODUCT_SUCCESS]: (state, action) => ({
      ...state,
      landing: action.payload,
    }),
    [LANDING_PRODUCT_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [READ_PRODUCT_SUCCESS]: (state, { payload: info }) => ({
      ...state,
      productDetail: info,
      productInfo: info,
    }),
    [READ_PRODUCT_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [UNLOAD_PRODUCT]: () => initialState,
    [UPDATE_UPLOAD_SUCCESS]: (state, { payload: upload }) => ({
      ...state,
      upload,
    }),
    [UPDATE_UPLOAD_FAILURE]: (state, { payload: uploadError }) => ({
      ...state,
      uploadError,
    }),
  },
  initialState,
);

export default landing;
