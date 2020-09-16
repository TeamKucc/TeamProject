import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestsaga';
import * as productAPI from '../lib/api/product';
import { takeLatest, take } from 'redux-saga/effects';
import produce from 'immer'

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

const [
  SEARCH_PRODUCT,
  SEARCH_PRODUCT_SUCCESS,
  SEARCH_PRODUCT_FAILURE,
] = createRequestActionTypes('search/SEARCH_PRODUCT')

const CHANGE_FIELD = 'search/CHANGE_FIELD'

const [
  END_TIME,
  END_TIME_SUCCESS,
  END_TIME_FAILURE
] = createRequestActionTypes('product/END_TIME');

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
export const searchProduct = createAction(SEARCH_PRODUCT, (id) => id)
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value
}))
export const endTime = createAction(END_TIME,id=>id)
export const unloadProduct = createAction(UNLOAD_PRODUCT);

// export const reviewProduct = createAction(
//   REVIEW_PRODUCT,
//   ({ user, id, write }) => ({ user, id, write })
// )

// export const readReview = createAction(READ_REVIEW, (id) => id);

const landingProductSaga = createRequestSaga(
  LANDING_PRODUCT,
  productAPI.landingProduct,
);
const readProductSaga = createRequestSaga(READ_PRODUCT, productAPI.readProduct);

const searchProductSaga = createRequestSaga(SEARCH_PRODUCT, productAPI.searchProduct)
// const reviewProductSaga = createRequestSaga(REVIEW_PRODUCT, productAPI.reviewProduct)
// const readReviewSaga = createRequestSaga(READ_REVIEW, productAPI.readReview)

const endTimeSaga = createRequestSaga(END_TIME,productAPI.endTime)

export function* landingSaga() {
  yield takeLatest(LANDING_PRODUCT, landingProductSaga);
  yield takeLatest(READ_PRODUCT, readProductSaga);
  yield takeLatest(SEARCH_PRODUCT, searchProductSaga)
  yield takeLatest(END_TIME,endTimeSaga)
}

const initialState = {
  landing: {},
  error: null,
  product: null,
  productDetail: null,
  productInfo: {},
  word: '',
  search: {},
  write: '',
  review: {},
  time:null,
};

const landing = handleActions(
  {
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
    [SEARCH_PRODUCT_SUCCESS]: (state, { payload: search }) => ({
      ...state,
      search,
    }),
    [SEARCH_PRODUCT_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [END_TIME_SUCCESS]: (state, { payload: time }) => ({
      ...state,
      time,
    }),
    [END_TIME_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default landing;
