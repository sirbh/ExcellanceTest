import {configureStore} from '@reduxjs/toolkit'
import {combineReducers} from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authReducer from './auth'
import modalReducer from './modal'
import tasksReducer from './tasks'
import thunk from 'redux-thunk'
import modal from './modal'



const reducer = combineReducers({
    authenticate:authReducer,
    modal:modalReducer,
    tasks:tasksReducer
})

const persistConfig = {
    key:'root',
    storage,
    blacklist:[modal]
}

const persistedReducer = persistReducer(persistConfig,reducer)


export default configureStore({
    reducer:persistedReducer,
    middleware:[thunk]
})