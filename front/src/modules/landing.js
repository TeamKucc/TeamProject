import { createAction, handleActions } from 'redux-actions'
import createRequestSaga, {createRequestActionTypes} from '../lib/createRequestsaga'
import * as productAPI from '../lib/api/product'
import { takeLatest, take } from 'redux-saga/effects'

const [
  LANDING_PRODUCT,
  LANDING_PRODUCT_SUCCESS,
  LANDING_PRODUCT_FAILURE,
] = createRequestActionTypes('landing/LANDING_PRODUCT');

const [
  READ_PRODUCT,
  READ_PRODUCT_SUCCESS,
  READ_PRODUCT_FAILURE
]=createRequestActionTypes('read/READ_PRODUCT');

const UNLOAD_PRODUCT = 'unload/UNLOAD_PRODUCT'

export const landingProduct = createAction(
  LANDING_PRODUCT,
  ({ thumbnails, title, price, discount }) => ({
    thumbnails,
    title,
    price,
    discount,
  }),
);

export const readProduct = createAction(READ_PRODUCT,({_id})=>({_id}));

export const unloadProduct = createAction(UNLOAD_PRODUCT)

const landingProductSaga = createRequestSaga(LANDING_PRODUCT, productAPI.landingProduct);
const readProductSaga = createRequestSaga(READ_PRODUCT,productAPI.readProduct)

export function* landingSaga() {
  yield takeLatest(LANDING_PRODUCT, landingProductSaga);
  yield takeLatest(READ_PRODUCT,readProductSaga)
}

const initialState = {
  landing: {},
  error: null,
  product:null,
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
    [READ_PRODUCT_SUCCESS]:(state,{payload:product})=>({
      ...state,
      product
    }),
    [READ_PRODUCT_FAILURE]:(state,{payload:error})=>({
      ...state,
      error
    }),
    [UNLOAD_PRODUCT]:()=>initialState,
  },
  initialState,
);

export default landing;
