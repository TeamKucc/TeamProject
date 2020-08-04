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

export const tempSetUser = createAction(TEMP_SET_USER, user => user)
export const logout = createAction(LOGOUT);
export const userUpdate = createAction(USER_UPDATE,)
export const getHistory = createAction(GET_HISTORY, user => user)

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

export function* userSaga() {
    yield takeLatest(LOGOUT, logoutSaga);
    yield takeLatest(GET_HISTORY,getHistorySaga)
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

