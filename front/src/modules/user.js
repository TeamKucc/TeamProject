import { createAction, handleActions } from 'redux-actions';
import { takeLatest, call } from 'redux-saga/effects';
import * as authCtrl from '../lib/api/auth';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestsaga'

const TEMP_SET_USER = 'user/TEMP_SET_USER';
const [
    CHECK,
    CHECK_SUCCESS,
    CHECK_FAILURE,
] = createRequestActionTypes('user/CHECK')
const LOGOUT = 'user/LOGOUT'

export const tempSetUser = createAction(TEMP_SET_USER, user => user)
export const check = createAction(CHECK)
export const logout = createAction(LOGOUT);


const checkSaga = createRequestSaga(CHECK, authCtrl.check);

function checkFailureSaga() {
    try {
        localStorage.removeItem('user');
    } catch (e) {
        console.log('localStorage Error');
    }
}

function* logoutSaga() {
    try {
        yield call(authCtrl.logout);
        localStorage.removeItem('user')
    } catch (error) {
        console.log(error)
    }
}

export function* userSaga() {
    yield takeLatest(CHECK, checkSaga);
    yield takeLatest(CHECK_FAILURE,checkFailureSaga);
    yield takeLatest(LOGOUT,logoutSaga);
}

const initialState={
    user:null,
    checkError:null,
}

export default handleActions(
    {
        [TEMP_SET_USER]:(state,{payload:user})=>({
            ...state,
            user,
        }),
        [CHECK_SUCCESS]:(state,{payload:user})=>({
            ...state,
            checkError:null,
            user
        }),
        [CHECK_FAILURE]:(state,{payload:error})=>({
            ...state,
            checkError:error,
        }),
        [LOGOUT]:state=>({
            ...state,
            user:null
        })
    },
    initialState,
)

