import { createAction, handleActions } from 'redux-actions';
import { takeLatest, call } from 'redux-saga/effects';
import * as authCtrl from '../lib/api/auth';
import createRequestSaga,{createRequestActionTypes} from '../lib/createRequestsaga'


const TEMP_SET_USER = 'user/TEMP_SET_USER';
const LOGOUT = 'user/LOGOUT'
const [
    USERINFO,
    USERINFO_SUCCESS,
    USERINFO_FAILURE
]=createRequestActionTypes('user/USERINFO')

export const tempSetUser = createAction(TEMP_SET_USER, user => user)
export const logout = createAction(LOGOUT);
export const userInfo = createAction(USERINFO)


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
const userInfoSaga=createRequestSaga(USERINFO)

export function* userSaga() {
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
        [LOGOUT]:state=>({
            ...state,
            user:null
        })
    },
    initialState,
)

