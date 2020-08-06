import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestsaga';
import * as productAPI from '../lib/api/product';
import { takeLatest } from 'redux-saga/effects';

const CHANGE_FIELD = 'delivery/CHANGE_FIELD';
const [
  DELIVERY_UPLOAD,
  DELIVERY_UPLOAD_SUCCESS,
  DELIVERY_UPLOAD_FAILURE,
] = createRequestActionTypes('delivery/DELIVERY_UPLOAD');

export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));

export const deliveryUpload = createAction(
  DELIVERY_UPLOAD,
  ({ delivery, deliveryNumber }) => ({ delivery, deliveryNumber }),
);

const deliveryUploadSaga = createRequestSaga(
  DELIVERY_UPLOAD,
  productAPI.deliveryUpload,
);

export function* deliverySaga() {
  yield takeLatest(DELIVERY_UPLOAD, deliveryUploadSaga);
}

export const initialState = {
  delivery: '',
  deliveryNumber: '',
};

const delivery = handleActions(
  {
  [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
    ...state,
    [key]: value,
  }),
  [DELIVERY_UPLOAD_SUCCESS]: (state, { payload: delivery }) => ({
    ...state,
    delivery,
  }),
  [DELIVERY_UPLOAD_FAILURE]: (state, { payload: error }) => ({
    ...state,
    error,
  }),
},
initialState
);

export default delivery