import {combineReducers} from 'redux'
import {all} from 'redux-saga/effects'
import loading from './loading'
import auth,{authSaga} from './auth'
import user,{userSaga} from './user'
import upload, { productSaga } from './upload'
import landing, { landingSaga } from './landing'

const rootReducer = combineReducers({
    loading,
    auth,
    user,
    upload,
	landing,
})

export function* rootSaga(){
    yield all([authSaga(),userSaga(),productSaga(),  landingSaga()]);
}

export default rootReducer;