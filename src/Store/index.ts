import {applyMiddleware, createStore, Store} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {ClientesState} from './Ducks/Clientes/types'
import rootReducer from './Ducks/rootReducer'
import rootSaga from './Ducks/rootSaga'

export interface ApplicationState{
    reducerGet: ClientesState
}

const sagaMiddleware = createSagaMiddleware()

const store:Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)
export default store