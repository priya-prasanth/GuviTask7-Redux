import { createStore } from 'redux'
import { CrudReducer } from './Crudreducer'

export const CrudStore = createStore(CrudReducer)