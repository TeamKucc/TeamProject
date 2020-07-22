import { createAction, handleActions } from 'redux-actions'
import createRequestSaga, {createRequestActionTypes} from '../lib/createRequestsaga'
import * as productAPI from '../lib/api/product'
import { takeLatest } from 'redux-saga/effects'

const [
  LANDING_PRODUCT,
  LANDING_PRODUCT_SUCCESS,
  LANDING_PRODUCT_FAILURE,
] = createRequestActionTypes('landing/LANDING_PRODUCT');

export const landingProduct = createAction(
  LANDING_PRODUCT,
  ({ thumbnails, title, price, discount}) => ({ thumbnails, title, price, discount}),
);

const landingProductSaga = createRequestSaga(LANDING_PRODUCT, productAPI.landingProduct);

export function* landingSaga() {
  yield takeLatest(LANDING_PRODUCT, landingProductSaga);
}

const initialState = {
  landing: { thumbnails:[], title:'', price:0, discount:0},
  error: null,
};

const landing = handleActions(
  {
    [LANDING_PRODUCT_SUCCESS]: (state, { payload: landing, meta: response }) => ({
      ...state,
      landing,
    }),
    [LANDING_PRODUCT_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default landing;