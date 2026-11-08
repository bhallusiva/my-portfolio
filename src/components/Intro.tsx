import { useEffect, useState } from 'react'

const KEY = 'intro-seen'

export function shouldSkipIntro(): boolean {
  try {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches || sessionStorage.getItem(KEY) === '1'
  } catch {
    return false
  }
}

export default function Intro({ onLeave, onDone }: { onLeave: () => void; onDone: () => void }) {
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const t1 = setTimeout(() => {
      setLeaving(true)
      onLeave()
    }, 1400)
    const t2 = setTimeout(() => {
      try {
        sessionStorage.setItem(KEY, '1')
      } catch {
        /* ignore */
      }
      document.body.style.overflow = ''
      onDone()
    }, 2100)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      document.body.style.overflow = ''
    }
  }, [onLeave, onDone])

  return (
    <div className="fixed inset-0 z-[100]" aria-hidden="true">
      <div className={`intro-panel flex h-full w-full flex-col items-center justify-center gap-5 bg-paper ${leaving ? 'leave' : ''}`}>
        <div className="intro-fade flex h-14 w-14 items-center justify-center rounded-lg bg-accent font-mono text-xl font-bold text-paper">
          bs
        </div>
        <p className="intro-fade intro-delay text-lg font-semibold tracking-tight">Bhallu Siva</p>
        <div className="intro-line" />
        <p className="intro-fade intro-delay-2 font-mono text-xs text-muted">Java backend developer</p>
      </div>
    </div>
  )
}