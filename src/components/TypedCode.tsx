import { useEffect, useState } from 'react'

export interface CodeLine { t: string; c?: string }

const tone = (c?: string) => (c === 'a' ? 'text-accent' : c === 'k' ? 'text-ink' : 'text-muted')

export default function TypedCode({ lines }: { lines: CodeLine[] }) {
  const total = lines.reduce((n, l) => n + l.t.length + 1, 0)
  const reduced =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const [n, setN] = useState(reduced ? total : 0)

  useEffect(() => {
    if (reduced || n >= total) return
    // find the character about to be typed, pause a little longer at line ends
    let left = n
    let atEnd = false
    for (const l of lines) {
      if (left < l.t.length) break
      if (left === l.t.length) { atEnd = true; break }
      left -= l.t.length + 1
    }
    const id = setTimeout(() => setN(n + 1), atEnd ? 260 : 24)
    return () => clearTimeout(id)
  }, [n, total, reduced, lines])

  let left = n
  return (
    <>
      <span className="sr-only">{lines.map((l) => l.t).join('\n')}</span>
      <span aria-hidden="true">
        {lines.map((l, i) => {
          const shown = Math.max(0, Math.min(l.t.length, left))
          const active = n < total && left >= 0 && left <= l.t.length
          left -= l.t.length + 1
          return (
            <span key={i} className={`block whitespace-pre ${tone(l.c)}`}>
              {l.t.slice(0, shown)}
              {active && <span className="caret" />}
              <span className="invisible">{l.t.slice(shown) || ' '}</span>
            </span>
          )
        })}
      </span>
    </>
  )
}