import {call,put} from 'redux-saga/effects'
import {startLoading,finishLoading} from '../modules/loading'

export const createRequestActionTypes = type =>{
    const SUCCESS =`${type}_SUCCESS`;
    const FAILUER = `${type}_FAILURE`;
    return [type,SUCCESS,FAILUER]
}

export default function createRequestSaga(type,request){
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;
    
    return function*(action){
        yield put(startLoading(type))
        try {
            const response = yield call(request,action.payload);
            console.log(response.data)
            
            if(response.data.userId){
                console.log('save Data')
                localStorage.setItem('userId',JSON.stringify(response.data.userId))
            }

            
            yield put({
                type:SUCCESS,
                payload:response.data,
                meta:response
            })
        } catch (e) {
            yield put({
                type:FAILURE,
                payload:e,
                error:true
            })
        }
        yield put(finishLoading(type));
    }
}