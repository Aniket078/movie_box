import { configureStore } from '@reduxjs/toolkit'
import homeSlice from './homeSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { combineReducers } from '@reduxjs/toolkit'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const reducer = combineReducers({
  home: homeSlice
})

const persistReducers = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer: persistReducers
})