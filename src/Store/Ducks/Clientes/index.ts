import  {Reducer}  from 'redux';
import {ClientesState, ClientesTypes} from './types'

const INITIAL_STATE:ClientesState ={
    data:[],
    error: false,
    loading:false
}



const reducerGet: Reducer<ClientesState> = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ClientesTypes.LOAD_REQUEST:
            return {...state, loading:true}
        case ClientesTypes.LOAD_SUCCESS:
            return{...state, loading:false, error:false, data: action.payload.data}
        case ClientesTypes.LOAD_FILURE:
            return{...state, error:true, loading:false, data:[] }
        default:
            return state 
    }
}


const reducerPost: Reducer<ClientesState> = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ClientesTypes.LOAD_REQUEST_CADASTRAR:
            return {...state, loading:true, data:action.payload.data}
        case ClientesTypes.LOAD_SUCCESS_CADASTRAR:
            return{...state, loading:false, error:false, data: action.payload.response}
        case ClientesTypes.LOAD_FILURE_CADASTRAR:
            return{...state, error:true, loading:false, data:[] }
        default:
            return state 
    }
}

export  {reducerGet, reducerPost}

