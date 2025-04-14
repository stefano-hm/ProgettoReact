import { configureStore } from '@reduxjs/toolkit'
import timerReducer from './slices/timerSlice'

export const store = configureStore({
  reducer: {
    timer: timerReducer,
  },
})
