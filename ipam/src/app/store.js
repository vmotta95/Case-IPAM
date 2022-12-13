import { configureStore } from '@reduxjs/toolkit'
import  getStateReducer from '../features/getSlice'


export default configureStore({
  reducer: {
    getStates:getStateReducer
  }
})