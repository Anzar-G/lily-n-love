import { useState, useEffect } from 'react'

const colors = [
  'rgba(255,255,255,0.15)',
  'rgba(245,240,232,0.2)',
  'rgba(201,160,160,0.1)',
]

function getRandom(min: number, max: number) {
  return Math.random() * (max - min) + min
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(true)
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 600px)')
    setIsMobile(mq.matches)
    const handler = () => setIsMobile(window.matchMedia('(max-width: 600px)').matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])
  return isMobile
}

export function FallingPetals() {
  const isMobile = useIsMobile()
  const petalCount = isMobile ? 5 : 10
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden>
      {Array.from({ length: petalCount }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${getRandom(0, 100)}%`,
            width: `${getRandom(6, 14)}px`,
            height: `${getRandom(8, 18)}px`,
            background: colors[i % colors.length],
            animation: `petal-fall ${getRandom(18, 28)}s linear infinite`,
            animationDelay: `${getRandom(0, 15)}s`,
          }}
        />
      ))}
    </div>
  )
}
