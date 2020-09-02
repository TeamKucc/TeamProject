import { createAction, handleActions } from 'redux-actions'
import { takeLatest} from 'redux-saga/effects'
import createRequestsaga, { createRequestActionTypes } from '../lib/createRequestsaga'
import * as authAPI from '../lib/api/auth';
import * as productAPI from '../lib/api/product'


const UNLOAD_USER='admin/UNLOAD_USER'

const [
    DELETE_PRODUCT,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAILURE
]=createRequestActionTypes('admin/DELETE_PRODUCT')

const [
    GET_USER,
    GET_USER_SUCCESS,
    GET_USER_FAILURE,
]=createRequestActionTypes('admin/GET_USER')

const [
    DELETE_MEMBER,
    DELETE_MEMBER_SUCCESS,
    DELETE_MEMBER_FAILURE
]=createRequestActionTypes('admin/DELETE_MEMBER')


export const deleteProduct = createAction(DELETE_PRODUCT,id=>id)
export const deleteMember = createAction(DELETE_MEMBER,id=>id)
export const getUser = createAction(GET_USER)
export const unloadUser = createAction(UNLOAD_USER)

const deleteProductSaga = createRequestsaga(DELETE_PRODUCT,productAPI.productDelete)
const deleteMemberSaga  =createRequestsaga(DELETE_MEMBER,authAPI.memberDelete)
const getUserSaga = createRequestsaga(GET_USER,authAPI.getUser)

export function* adminSaga(){
   yield takeLatest(DELETE_PRODUCT,deleteProductSaga)
   yield takeLatest(GET_USER,getUserSaga)
   yield takeLatest(DELETE_MEMBER,deleteMemberSaga)
}

const initialState ={
    member:null,
    product:null,
    userlist:null,
    error:null
}

const admin = handleActions(
    {   
        [GET_USER_SUCCESS]:(state,{payload:userlist})=>({
            ...state,
            userlist,
            error:null,
        }),
        [GET_USER_FAILURE]:(state,{payload:error})=>({
            ...state,
            error
        }),
        [DELETE_MEMBER_SUCCESS]:(state,{payload:member})=>({
            ...state,
            member,
            error:null
        }),
        [DELETE_MEMBER_FAILURE]:(state,{payload:error})=>({
            ...state,
            error
        }),
        [DELETE_PRODUCT_SUCCESS]:(state,{payload:product})=>({
            ...state,
            product,
            error:null
        }),
        [DELETE_PRODUCT_FAILURE]:(state,{payload:error})=>({
            ...state,
            error
        }),
        [UNLOAD_USER]:()=>initialState,
    },
    initialState,
);

export default admin;