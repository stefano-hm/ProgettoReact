import { useState, useEffect, useRef } from 'react'
import '../styles/Timer.css'

export default function Timer() {
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const intervalRef = useRef(null)

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => prev - 1)
      }, 1000)
    }

    return () => clearInterval(intervalRef.current)
  }, [isRunning])

  const startTimer = () => {
    if (seconds > 0) setIsRunning(true)
  }

  const pauseTimer = () => setIsRunning(false)

  const resetTimer = () => {
    setIsRunning(false)
    setSeconds(0)
  }

  const handleChange = (e) => {
    setSeconds(Number(e.target.value) * 60)
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
