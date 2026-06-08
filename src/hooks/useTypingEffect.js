import { useState, useEffect, useCallback } from 'react'

export function useTypingEffect(texts, speed = 80, deleteSpeed = 40, pauseDuration = 2000) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (!texts || texts.length === 0) return

    const currentText = texts[currentIndex]

    if (isPaused) {
      const timer = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, pauseDuration)
      return () => clearTimeout(timer)
    }

    if (isDeleting) {
      if (displayText.length === 0) {
        setIsDeleting(false)
        setCurrentIndex((prev) => (prev + 1) % texts.length)
        return
      }
      const timer = setTimeout(() => {
        setDisplayText(prev => prev.slice(0, -1))
      }, deleteSpeed)
      return () => clearTimeout(timer)
    }

    if (displayText === currentText) {
      setIsPaused(true)
      return
    }

    const timer = setTimeout(() => {
      setDisplayText(currentText.slice(0, displayText.length + 1))
    }, speed)
    return () => clearTimeout(timer)
  }, [displayText, currentIndex, isDeleting, isPaused, texts, speed, deleteSpeed, pauseDuration])

  return displayText
}
