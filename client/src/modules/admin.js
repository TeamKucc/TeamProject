import { createAction, handleActions } from 'redux-actions'
import produce from 'immer'
import { takeLatest} from 'redux-saga/effects'
import createRequestsaga, { createRequestActionTypes } from '../lib/createRequestsaga'
import * as authAPI from '../lib/api/auth';
import * as productAPI from '../lib/api/product'

const [
    DELETE_PRODUCT,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAILURE
]=createRequestActionTypes('admin/DELETE_PRODUCT')

const [
    DELETE_MEMBER,
    DELETE_MEMBER_SUCCESS,
    DELETE_MEMBER_FAILURE
]=createRequestActionTypes('admin/DELETE_MEMBER')


export const deleteProduct = createAction(DELETE_PRODUCT,id=>id)
export const deleteMember = createAction(DELETE_MEMBER,id=>id)

const deleteProductSaga = createRequestsaga(DELETE_PRODUCT,productAPI.productDelete)
const deleteMemberSaga  =createRequestsaga(DELETE_MEMBER,authAPI.memberDelete)

export function* adminSaga(){
    takeLatest(DELETE_PRODUCT,deleteProductSaga)
    takeLatest(DELETE_MEMBER,deleteMemberSaga)
}

const initialState ={
    member:null,
    product:null,
    error:null
}

const admin = handleActions(
    {
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
        })
    },
    initialState,
);

export default admin;