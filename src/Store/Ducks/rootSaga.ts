import {all, takeLatest} from 'redux-saga/effects'
import {load, loadPost} from './Clientes/sagas'
import {ClientesTypes} from './Clientes/types'

export default function* rootSaga(){
    return yield all([
        takeLatest(ClientesTypes.LOAD_REQUEST, load)
        // takeLatest(ClientesTypes.LOAD_REQUEST_CADASTRAR, loadPost)
    ])
}