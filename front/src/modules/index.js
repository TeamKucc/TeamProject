import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import loading from './loading';
import auth, { authSaga } from './auth';
import user, { userSaga } from './user';
import upload, { productSaga } from './upload';
import landing, { landingSaga } from './landing';
import management, { managementSaga } from './management';
import delivery, { deliverySaga } from './delivery';

const rootReducer = combineReducers({
  loading,
  auth,
  user,
  upload,
  landing,
  management,
  delivery,
});

export function* rootSaga() {
  yield all([
    authSaga(),
    userSaga(),
    productSaga(),
    landingSaga(),
    managementSaga(),
    deliverySaga(),
  ]);
}

export default rootReducer;
