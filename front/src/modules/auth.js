import { createAction, handleActions } from 'redux-actions'
import produce from 'immer'
import { takeLatest } from 'redux-saga/effects'
import createRequestsaga, { createRequestActionTypes } from '../lib/createRequestsaga'
import * as authCtrl from '../lib/api/auth'

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALLIZE_FORM = 'auth/INITIALIZE_FORM';

const [
    REGISTER,
    REGISTER_SUCCESS,
    REGISTER_FAILURE
] = createRequestActionTypes('auth/REGISTER')

const [
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
] = createRequestActionTypes('auth/LOGIN')

export const changeField = createAction(
    CHANGE_FIELD,
    ({ form, key, value }) => ({
        form,
        key,
        value
    })
)

export const initializeForm = createAction(INITIALLIZE_FORM, form => form);
export const login = createAction(LOGIN, ({ userID, password }) => ({ userID, password }));
export const register = createAction(REGISTER, ({ username, password }) => ({ username, password }));

export const loginSaga = createRequestsaga(LOGIN, authCtrl.login)
export const registerSaga = createRequestsaga(REGISTER, authCtrl.register);

export function* authSaga() {
    yield takeLatest(REGISTER, registerSaga);
    yield takeLatest(LOGIN, loginSaga)
}

const initialState = {
    register: {
        userID: '',
        password: '',
        passwordConfirm: '',
    },
    login: {
        userID: '',
        password: '',
    },
    auth: null,
    authError: null,
}

const auth = handleActions(
    {
        [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
            produce(state, draft => { draft[form][key] = value }),
        [INITIALLIZE_FORM]: (state, { payload: form }) => ({
            ...state,
            [form]: initialState[form],
            authError: null
        }),
        [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
            ...state,
            authError: null,
            auth,
            
        }),
        
        [LOGIN_FAILURE]: (state, { payload: error }) => ({
            ...state,
            authError: error
        }),
        [REGISTER_SUCCESS]: (state, { payload: auth }) => ({
            ...state,
            authError: null,
            auth
        }),
        [REGISTER_FAILURE]: (state, { payload: error }) => ({
            ...state,
            authError: error
        })
    }
    ,initialState
)

export default auth;




