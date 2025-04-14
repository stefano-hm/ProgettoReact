import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  time: 0,
  isRunning: false,
}

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    setTime: (state, action) => {
      state.time = action.payload
    },
    start: (state) => {
      state.isRunning = true
    },
    stop: (state) => {
      state.isRunning = false
    },
    reset: (state) => {
      state.time = 0
      state.isRunning = false
    },
  },
})

export const { setTime, start, stop, reset } = timerSlice.actions
export default timerSlice.reducer
