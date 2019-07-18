// actionTypes
export enum ClientesTypes{
    LOAD_REQUEST = '@clientes/LOAD_REQUEST',
    LOAD_SUCCESS = '@clientes/LOAD_SUCCESS ',
    LOAD_FILURE = '@clientes/LOAD_FILURE',

    LOAD_REQUEST_CADASTRAR = '@clientes/LOAD_REQUEST_CADASTRAR',
    LOAD_SUCCESS_CADASTRAR = '@clientes/LOAD_SUCCESS_CADASTRAR ',
    LOAD_FILURE_CADASTRAR = '@clientes/LOAD_FILURE_CADASTRAR',
}

// dataTypes
export interface Clientes{
    id?:String,
    cpf: String,
    dataCadastro: String,
    dataEmprestimo: String,
    nome: String,
    sistema: String,
    valorEmprestimo: String,
    valorRenda: String
}

// stateTypes
export interface ClientesState{
    readonly data: Clientes[],
    readonly loading: boolean,
    readonly error:boolean
}

export interface ClientesStatePost{
    readonly response: boolean,
    readonly data: Clientes[],
    readonly loading: boolean,
    readonly error:boolean
}