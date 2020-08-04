import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestsaga';
import * as productAPI from '../lib/api/product';
import { takeLatest } from 'redux-saga/effects';

const [
  STOCK_MANAGEMENT,
  STOCK_MANAGEMENT_SUCCESS,
  STOCK_MANAGEMENT_FAILURE,
] = createRequestActionTypes('management/STOCK_MANAGEMENT');

const [
  STOCK_DETAIL,
  STOCK_DETAIL_SUCCESS,
  STOCK_DETAIL_FAILURE,
] = createRequestActionTypes('management/STOCK_DETAIL')

export const stockManagement = createAction(
  STOCK_MANAGEMENT,
  ({ stock, thumbnails, title, price, discount, enable }) => ({
    stock,
    thumbnails,
    title,
    price,
    discount,
    enable,
  }),
);

export const stockDetail = createAction(
  STOCK_DETAIL,
  id => id,
)

const stockManagementSaga = createRequestSaga(
  STOCK_MANAGEMENT,
  productAPI.stockManagement,
);

const stockDetailSaga = createRequestSaga(
  STOCK_DETAIL,
  productAPI.stockDetail
)

export function* managementSaga() {
  yield takeLatest(STOCK_MANAGEMENT, stockManagementSaga);
  yield takeLatest(STOCK_DETAIL, stockDetailSaga)
}

const initialState = {
  management: {},
  error: null,
};

const management = handleActions(
  {
    [STOCK_MANAGEMENT_SUCCESS]: (state, action) => ({
      ...state,
      management: action.payload,
    }),
    [STOCK_MANAGEMENT_FAILURE]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
    [STOCK_DETAIL_SUCCESS]: (state, action) => ({
      ...state,
      management: action.payload,
    }),
    [STOCK_DETAIL_FAILURE]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
  },
  initialState,
);

export default management;
