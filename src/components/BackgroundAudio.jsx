import { useEffect, useRef } from 'react'

export default function BackgroundAudio({ isRunning, selectedSound }) {
  const audioRef = useRef(null)

  useEffect(() => {
    if (isRunning && selectedSound !== 'none') {
      audioRef.current = new Audio(`/sounds/${selectedSound}.mp3`)
      audioRef.current.loop = true
      audioRef.current.play()
    } else if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
      }
    }
  }, [isRunning, selectedSound])

  return null
}
