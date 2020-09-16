import { createAction, handleActions } from 'redux-actions';
import { takeLatest, call, take } from 'redux-saga/effects';
import * as authCtrl from '../lib/api/auth';
import * as userCtrl from '../lib/api/user';
import produce from 'immer';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestsaga';


const LOGOUT = 'user/LOGOUT'
const CHANGE_FIELD = 'user/CHANGE_FIELD';
const TEMP_SET_USER = 'user/TEMP_SET_USER';
const COMPLETE_RESET = 'user/COMPLETE_RESET'

const [
    USER_ROLECHECK,
    USER_ROLECHECK_SUCCESS,
    USER_ROLECHECK_FAILURE
]= createRequestActionTypes('user/USER_ROLECHECK')

const [
    USER_UPDATE,
    USER_UPDATE_SUCCESS,
    USER_UPDATE_FAILURE,
] = createRequestActionTypes('user/USER_UPDATE')

const [
    GET_USER,
    GET_USER_SUCCESS,
    GET_USER_FAILURE,
]=createRequestActionTypes('user/GET_USER')

const [
    GET_HISTORY,
    GET_HISTORY_SUCCESS,
    GET_HISTORY_FAILURE
] = createRequestActionTypes('user/GET_HISTORY')

const [
    SELLER_HISTORY,
    SELLER_HISTORY_SUCCESS,
    SELLER_HISTORY_FAILURE
] = createRequestActionTypes('seller/SELLER_HISTORY')

const [
    MAKE_DEAL,
    MAKE_DEAL_SUCCESS,
    MAKE_DEAL_FAILURE
] = createRequestActionTypes('user/MAKE_DEAL')

const [
    JOIN_DEAL,
    JOIN_DEAL_SUCCESS,
    JOIN_DEAL_FAILURE
] = createRequestActionTypes('user/JOIN_DEAL')

const [
    CHECK_DEAL,
    CHECK_DEAL_SUCCESS,
    CHECK_DEAL_FAILURE
] = createRequestActionTypes('user/CHECK_DEAL')

const [
    END_DEAL,
    END_DEAL_SUCCESS,
    END_DEAL_FAILURE
]=createRequestActionTypes('user/END_DEAL')

const UNLOAD_USER = 'user/UNLOAD_USER'

//create redux actions
export const tempSetUser = createAction(TEMP_SET_USER, user => user)
export const roleCheck = createAction(USER_ROLECHECK,({user,role})=>({user,role}))
export const logout = createAction(LOGOUT);
export const userUpdate = createAction(USER_UPDATE, ({ userID, name, password, email, _id }) => ({ userID, name, password, email, _id }))
export const completeReset = createAction(COMPLETE_RESET)
export const unloadUser = createAction(UNLOAD_USER)
export const getUser = createAction(GET_USER)

export const getHistory = createAction(GET_HISTORY, user => user)
export const sellerHistory = createAction(SELLER_HISTORY, user => user)

export const makeDeal = createAction(MAKE_DEAL, ({ user, product }) => ({ user, product }))
export const joinDeal = createAction(JOIN_DEAL, ({ user, product, _id }) => ({ user, product, _id }))
export const checkDeal = createAction(CHECK_DEAL, ({user,product}) => ({user,product}))
export const endDeal = createAction(END_DEAL,_id=>_id)

export const UserchangeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
    key,
    value,
  }));

const userRoleCheckSaga = createRequestSaga(USER_ROLECHECK,userCtrl.roleCheck)
const getHistorySaga = createRequestSaga(GET_HISTORY, userCtrl.gethistory)
const sellerHistorySaga = createRequestSaga(SELLER_HISTORY, userCtrl.sellerHistory)
const userUpdateSaga = createRequestSaga(USER_UPDATE, userCtrl.userupdate)
const getUserSaga = createRequestSaga(GET_USER,authCtrl.getUser)

const makeDealSaga = createRequestSaga(MAKE_DEAL, userCtrl.makeDeal)
const joinDealSaga = createRequestSaga(JOIN_DEAL, userCtrl.joinDeal)
const checkDealSaga = createRequestSaga(CHECK_DEAL,userCtrl.checkDeal)
const endDealSaga  =createRequestSaga(END_DEAL,userCtrl.endDeal)

function* logoutSaga() {
    console.log('logout saga')
    try {
        yield call(authCtrl.logout);
        localStorage.removeItem('userId')
        localStorage.removeItem('role')

    } catch (error) {
        console.log(error)
    }
}

export function* userSaga() {
    yield takeLatest(LOGOUT, logoutSaga);
    yield takeLatest(GET_HISTORY, getHistorySaga)
    yield takeLatest(SELLER_HISTORY, sellerHistorySaga)
    yield takeLatest(USER_UPDATE, userUpdateSaga)
    yield takeLatest(MAKE_DEAL, makeDealSaga)
    yield takeLatest(JOIN_DEAL, joinDealSaga)
    yield takeLatest(CHECK_DEAL,checkDealSaga)
    yield takeLatest(END_DEAL,endDealSaga)
    yield takeLatest(USER_ROLECHECK,userRoleCheckSaga)
    yield takeLatest(GET_USER,getUserSaga)
}

const initialState = {
    user: null,
    checkError: null,
    history: null,
    error: null,
    deal: null,
    seller: null,
    complete:false,
    dealError:null,
    makeDeal:false,
    makeDealError:null,
    endDeal:null,
    endDealError:null,
    admit:false,
    admitError:null,
    userlist:null,
}

export default handleActions(
    {
        [TEMP_SET_USER]: (state, { payload: user }) => ({
            ...state,
            user,
        }),
        [USER_ROLECHECK_SUCCESS]:(state,{payload:admit})=>({
            ...state,
            admit
        }),
        [USER_ROLECHECK_FAILURE]:(state,{payload:admitError})=>({
            ...state,
            admitError
        }),
        [LOGOUT]: state => ({
            ...state,
            user: null
        }),
        [GET_USER_SUCCESS]:(state,{payload:userlist})=>({
            ...state,
            userlist,
            error:null
        }),
        [GET_HISTORY_FAILURE]:(state,{payload:error})=>({
            ...state,
            error
        }),
        [GET_HISTORY_SUCCESS]: (state, { payload: history }) => ({
            ...state,
            history,
            error: null
        }),
        [GET_HISTORY_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error
        }),
        [SELLER_HISTORY_SUCCESS]: (state, { payload: seller }) => ({
            ...state,
            seller
        }),
        [SELLER_HISTORY_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error
        })
        ,
        [JOIN_DEAL_SUCCESS]: (state, { payload: deal }) => ({
            ...state,
            deal
        }),
        [JOIN_DEAL_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error
        }),
        [CHECK_DEAL_SUCCESS]:(state,{payload:complete})=>({
            ...state,
            complete
        }),
        [CHECK_DEAL_FAILURE]:(state,{payload:dealError})=>({
            ...state,
            dealError
        }),
        [END_DEAL_SUCCESS]:(state,{payload:endDeal})=>({
            ...state,
            endDeal
        }),
        [END_DEAL_FAILURE]:(state,{payload:endDealError})=>({
            ...state,
            endDealError
        }),
        [MAKE_DEAL_SUCCESS]:(state,{payload:makeDeal})=>({
            ...state,
            makeDeal:true
        }),
        [MAKE_DEAL_FAILURE]:(state,{payload:makeDealError})=>({
            ...state,
            makeDealError
        }),
        [COMPLETE_RESET]:(state,{payload:complete})=>({
            ...state,
            complete:false
        }),
        [UNLOAD_USER]:()=>initialState,
    },
    initialState,
)

