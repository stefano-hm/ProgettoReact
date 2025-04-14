import { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSeconds, start, stop, reset } from '../store/timerSlice'
import '../styles/Timer.css'

export default function Timer() {
  // Usa Redux per il timer
  const seconds = useSelector((state) => state.timer.time)
  const isRunning = useSelector((state) => state.timer.isRunning)
  const dispatch = useDispatch()
  const intervalRef = useRef(null)

  useEffect(() => {
    if (isRunning && seconds > 0) {
      intervalRef.current = setInterval(() => {
        dispatch(setSeconds(seconds - 1))
      }, 1000)
    }

    return () => clearInterval(intervalRef.current)
  }, [isRunning, seconds, dispatch])

  const startTimer = () => {
    if (seconds > 0) {
      dispatch(start())
    }
  }

  const pauseTimer = () => dispatch(stop())

  const resetTimer = () => {
    dispatch(reset())
  }

  const handleChange = (e) => {
    dispatch(setSeconds(Number(e.target.value) * 60))
  }

  const formatTime = () => {
    const mins = String(Math.floor(seconds / 60)).padStart(2, '0')
    const secs = String(seconds % 60).padStart(2, '0')
    return `${mins}:${secs}`
  }

  return (
    <div className="timer-container">
      <h2>Timer di meditazione</h2>
      <input
        type="number"
        min="1"
        placeholder="Minuti"
        onChange={handleChange}
        disabled={isRunning}
      />
      <div className="timer-time">{formatTime()}</div>
      <div className="timer-buttons">
        <button onClick={startTimer} disabled={isRunning}>Start</button>
        <button onClick={pauseTimer} disabled={!isRunning}>Pausa</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  )
}
