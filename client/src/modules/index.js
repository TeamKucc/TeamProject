import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import loading from './loading';
import auth, { authSaga } from './auth';
import user, { userSaga } from './user';
import upload, { productSaga } from './upload';
import landing, { landingSaga } from './landing';
import management, { managementSaga } from './management';
import delivery, { deliverySaga } from './delivery';
import review, { reviewSaga } from './review'
import qna, { qnaSaga } from './qna';
import admin ,{adminSaga} from './admin'

const rootReducer = combineReducers({
  loading,
  auth,
  user,
  upload,
  landing,
  management,
  delivery,
  review,
  qna,
  admin
});

export function* rootSaga() {
  yield all([
    authSaga(),
    userSaga(),
    productSaga(),
    landingSaga(),
    managementSaga(),
    deliverySaga(),
    reviewSaga(),
    qnaSaga(),
    adminSaga()
  ]);
}

export default rootReducer;
