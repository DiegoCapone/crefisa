import {call, put } from 'redux-saga/effects'
import api from '../../../Service/api'

import {loadFailure,
        loadSuccess,
        loadSuccessCadastrar,
        loadFailureCadastrar} from './actions'

export function*  load(){
    try{
        const response = yield call(api.get, 'Cliente')
        yield put(loadSuccess(response.data))
    }catch(error){
        yield put(loadFailure())
    }
}


export function* loadPost(action:any){
    try{
        const response = yield call(api.post, 'Cliente', action.data)
        console.log(response);
        yield put(loadSuccessCadastrar(response.data))
    }catch(error){
        yield put(loadFailureCadastrar())
    }
}