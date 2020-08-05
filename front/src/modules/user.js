import { createAction, handleActions } from 'redux-actions';
import { takeLatest, call } from 'redux-saga/effects';
import * as authCtrl from '../lib/api/auth';
import * as userCtrl from '../lib/api/user'
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestsaga'


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

const [
    MAKE_DEAL,
    MAKE_DEAL_SUCCESS,
    MAKE_DEAL_FAILURE
]=createRequestActionTypes('user/MAKE_DEAL')

export const tempSetUser = createAction(TEMP_SET_USER, user => user)
export const logout = createAction(LOGOUT);
export const userUpdate = createAction(USER_UPDATE,({ userID, name, password, email,_id })=>({ userID, name, password, email,_id }))
export const getHistory = createAction(GET_HISTORY, user => user)
export const makeDeal = createAction(MAKE_DEAL,user=>user)

const getHistorySaga = createRequestSaga(GET_HISTORY, userCtrl.gethistory)
const userUpdateSaga = createRequestSaga(USER_UPDATE,userCtrl.userupdate)

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

export function* userSaga() {
    yield takeLatest(LOGOUT, logoutSaga);
    yield takeLatest(GET_HISTORY,getHistorySaga)
    yield takeLatest(USER_UPDATE,userUpdateSaga)
}

const initialState = {
    user: null,
    checkError: null,
    history: null,
    error: null,
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
            error
        })
    },
    initialState,
)

