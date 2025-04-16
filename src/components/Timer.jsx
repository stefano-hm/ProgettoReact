import { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSeconds, start, stop, reset } from '../store/slices/timerSlice'
import '../styles/Timer.css'
import '../styles/media-queries.css'
import BackgroundAudio from './BackgroundAudio'

export default function Timer() {
  const [selectedSound, setSelectedSound] = useState('none')

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

  const resetTimer = () => dispatch(reset())

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

      <div className="audio-selector">
        <label>Suono di sottofondo:</label>
        <select
          value={selectedSound}
          onChange={(e) => setSelectedSound(e.target.value)}
          disabled={isRunning}
        >
          <option value="none">Nessuno</option>
          <option value="ocean">Onde del mare</option>
          <option value="forest">Foresta</option>
          <option value="rain">Pioggia</option>
          <option value="nature">Natura</option>
        </select>
      </div>

      <div className="timer-time">{formatTime()}</div>

      <div className="timer-buttons">
        <button onClick={startTimer} disabled={isRunning}>Start</button>
        <button onClick={pauseTimer} disabled={!isRunning}>Pausa</button>
        <button onClick={resetTimer}>Reset</button>
      </div>

      {/* Componente audio */}
      <BackgroundAudio isRunning={isRunning} selectedSound={selectedSound} />
    </div>
  )
}
