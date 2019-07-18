import {action} from 'typesafe-actions'
import {Clientes, ClientesTypes} from './types'


//GET
export const 
    loadRequest = () => action(ClientesTypes.LOAD_REQUEST);
export const 
    loadSuccess = (data:Clientes[]) => action(ClientesTypes.LOAD_SUCCESS, {data});
export const 
    loadFailure = () => action(ClientesTypes.LOAD_FILURE);


//POST
export const 
    loadRequestCadastrar = (data:Clientes[]) => action(ClientesTypes.LOAD_REQUEST_CADASTRAR, {data});
export const 
    loadSuccessCadastrar = (data:any) => action(ClientesTypes.LOAD_SUCCESS_CADASTRAR, {data});
export const 
    loadFailureCadastrar = () => action(ClientesTypes.LOAD_FILURE_CADASTRAR);