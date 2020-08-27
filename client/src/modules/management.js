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

const UNLOAD_STOCK='management/UNLOAD_STOCK'

export const stockManagement = createAction(
  STOCK_MANAGEMENT,
  seller => seller,
);

export const stockDetail = createAction(
  STOCK_DETAIL,
  id => id,
)

export const unloadStock = createAction(UNLOAD_STOCK)

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
  manegementDetail:{},
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
    [UNLOAD_STOCK]:()=>initialState,
  },
  initialState,
);

export default management;
