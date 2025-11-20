import { useState, useEffect, useRef } from 'react'

export function useScrollReveal() {
  const [revealProgress, setRevealProgress] = useState(0)
  const sectionRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      
      // Calculate when section enters viewport - reveal completes early
      const sectionTop = rect.top
      const sectionHeight = rect.height
      
      // Start revealing when section enters viewport
      // Complete reveal when section is at center of viewport
      const startPoint = windowHeight * 0.9
      const endPoint = windowHeight * 0.3
      
      // Calculate progress (0 to 1)
      let progress = 0
      if (sectionTop < startPoint && sectionTop > endPoint) {
        progress = 1 - (sectionTop - endPoint) / (startPoint - endPoint)
      } else if (sectionTop <= endPoint) {
        progress = 1
      }
      
      setRevealProgress(Math.max(0, Math.min(1, progress)))
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { revealProgress, sectionRef }
}

