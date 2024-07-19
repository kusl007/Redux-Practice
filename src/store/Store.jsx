import { configureStore } from '@reduxjs/toolkit'
import UserReducer from './reducers/UserReducer'
import ProoductReducer from './reducers/ProoductReducer'

export const store = configureStore({
  reducer: {
    UserReducer:UserReducer,
    ProoductReducer:ProoductReducer,

  }
})