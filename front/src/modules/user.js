import { createAction, handleActions } from 'redux-actions';
import { takeLatest, call } from 'redux-saga/effects';
import * as authCtrl from '../lib/api/auth';
<<<<<<< HEAD
import * as userCtrl from '../lib/api/user';
import createRequestSaga, {createRequestActionTypes} from '../lib/createRequestsaga'
=======
import * as userCtrl from '../lib/api/user'
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestsaga'
>>>>>>> 김선규


const TEMP_SET_USER = 'user/TEMP_SET_USER';
const LOGOUT = 'user/LOGOUT'
const [
    USER_UPDATE,
    USER_UPDATE_SUCCESS,
    USER_UPDATE_FAILURE,
] = createRequestActionTypes('user/USER_UPDATE')

const [
    GET_HISTORY,
    GET_HISTORY_SUCCESS,
    GET_HISTORY_FAILURE
] = createRequestActionTypes('user/GET_HISTORY')

export const tempSetUser = createAction(TEMP_SET_USER, user => user)
export const logout = createAction(LOGOUT);
<<<<<<< HEAD
export const userUpdate =createAction(USER_UPDATE,({userID,name,password,email,_id }) => ({ userID,name,password,email,_id}))
=======
export const userUpdate = createAction(USER_UPDATE,)
export const getHistory = createAction(GET_HISTORY, user => user)
>>>>>>> 김선규

const getHistorySaga = createRequestSaga(GET_HISTORY, userCtrl.gethistory)

function* logoutSaga() {
    console.log('logout saga')
    try {
        yield call(authCtrl.logout);
        localStorage.removeItem('userId')
        console.log('remove')
    } catch (error) {
        console.log(error)
    }
}

<<<<<<< HEAD
const userUpdateSaga=createRequestSaga(USER_UPDATE,userCtrl.userupdate)

export function* userSaga() {
    yield takeLatest(LOGOUT,logoutSaga);
    yield takeLatest(USER_UPDATE,userUpdateSaga)
}

const initialState={
    user:null,
    checkError:null,
    userInfo:null,
    error:null
=======
export function* userSaga() {
    yield takeLatest(LOGOUT, logoutSaga);
    yield takeLatest(GET_HISTORY,getHistorySaga)
}

const initialState = {
    user: null,
    checkError: null,
    history: null,
    error: null,
>>>>>>> 김선규
}

export default handleActions(
    {
        [TEMP_SET_USER]: (state, { payload: user }) => ({
            ...state,
            user,
        }),
        [LOGOUT]: state => ({
            ...state,
            user: null
        }),
        [GET_HISTORY_SUCCESS]: (state, { payload: history }) => ({
            ...state,
            history,
            error: null
        }),
        [GET_HISTORY_FAILURE]: (state, { payload: error }) => ({
            ...state,
<<<<<<< HEAD
            user:null
        }),
        [USER_UPDATE_SUCCESS]:(state,{payload:userinfo})=>({
            ...state,
            userinfo,
            error:null,
        }),
        [USER_UPDATE_FAILURE]:(state,{payload:error})=>({
            ...state,
=======
>>>>>>> 김선규
            error
        })
    },
    initialState,
)

