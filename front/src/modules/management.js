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

export const stockManagement = createAction(
  STOCK_MANAGEMENT,
  ({ stock, thumbnails, title, price, discount }) => ({
    stock,
    thumbnails,
    title,
    price,
    discount,
  }),
);

const stockManagementSaga = createRequestSaga(
  STOCK_MANAGEMENT,
  productAPI.stockManagement,
);

export function* managementSaga() {
  yield takeLatest(STOCK_MANAGEMENT, stockManagementSaga);
}

const initialState = {
  management: { stock: 0, thumbnails: [], title: '', price: 0, discount: 0 },
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
  },
  initialState,
);

export default management;
