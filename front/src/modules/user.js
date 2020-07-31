import { createAction, handleActions } from 'redux-actions';
import { takeLatest, call } from 'redux-saga/effects';
import * as authCtrl from '../lib/api/auth';
import * as userCtrl from '../lib/api/user';
import createRequestSaga, {createRequestActionTypes} from '../lib/createRequestsaga'


const TEMP_SET_USER = 'user/TEMP_SET_USER';
const LOGOUT = 'user/LOGOUT'
const [
    USER_UPDATE,
    USER_UPDATE_SUCCESS,
    USER_UPDATE_FAILURE,
]=createRequestActionTypes('user/USER_UPDATE')

export const tempSetUser = createAction(TEMP_SET_USER, user => user)
export const logout = createAction(LOGOUT);
export const userUpdate =createAction(USER_UPDATE,({userID,name,password,email,_id }) => ({ userID,name,password,email,_id}))


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
}

export default handleActions(
    {
        [TEMP_SET_USER]:(state,{payload:user})=>({
            ...state,
            user,
        }),
        [LOGOUT]:state=>({
            ...state,
            user:null
        }),
        [USER_UPDATE_SUCCESS]:(state,{payload:userinfo})=>({
            ...state,
            userinfo,
            error:null,
        }),
        [USER_UPDATE_FAILURE]:(state,{payload:error})=>({
            ...state,
            error
        })
    },
    initialState,
)

