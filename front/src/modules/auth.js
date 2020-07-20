import { createAction, handleActions } from 'redux-actions'
import produce from 'immer'
import { takeLatest, take } from 'redux-saga/effects'
import createRequestsaga, { createRequestActionTypes } from '../lib/createRequestsaga'
import * as authCtrl from '../lib/api/auth'
import * as userCtrl from '../lib/api/user'

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

const [
    USERINFO,
    USERINFO_SUCCESS,
    USERINFO_FAILURE
]=createRequestActionTypes('user/USERINFO')

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
export const register = createAction(REGISTER, ({userID,name,password,email }) => ({ userID,name,password,email}));
export const userInfo = createAction(USERINFO)

export const loginSaga = createRequestsaga(LOGIN, authCtrl.login)
export const registerSaga = createRequestsaga(REGISTER, authCtrl.register);
export const userInfoSaga=  createRequestsaga(USERINFO,userCtrl.userinfo);

export function* authSaga() {
    yield takeLatest(REGISTER, registerSaga);
    yield takeLatest(LOGIN, loginSaga)
    yield takeLatest(USERINFO,userInfoSaga)
}

const initialState = {
    register: {
        userID: '',
        name:'',
        password: '',
        passwordConfirm: '',
        email:'',
    },
    login: {
        userID: '',
        password: '',
    },
    userInfo:{
        userID: '',
        name:'',
        password: '',
        passwordConfirm: '',
        email:'',
    },
    auth: null,
    authError: null,
    user:null,
    error:null
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
        }),
        [USERINFO_SUCCESS]:(state,{payload:user})=>({
            ...state,
            user:user,
            error:null,
        }),
        [USERINFO_FAILURE]:(state,{payload:error})=>({
            ...state,
            error:error
        })
    }
    ,initialState
)

export default auth;




