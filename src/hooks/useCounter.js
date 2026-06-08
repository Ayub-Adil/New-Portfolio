import { useState, useEffect, useRef } from 'react'

export function useCounter(end, duration = 2000, start = 0) {
  const [count, setCount] = useState(start)
  const [isActive, setIsActive] = useState(false)
  const frameRef = useRef(null)
  const startTimeRef = useRef(null)

  const startCounting = () => setIsActive(true)

  useEffect(() => {
    if (!isActive) return

    const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp
      const elapsed = timestamp - startTimeRef.current
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
      setCount(Math.floor(start + eased * (end - start)))

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate)
      }
    }

    frameRef.current = requestAnimationFrame(animate)
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [isActive, end, start, duration])

  return { count, startCounting }
}
