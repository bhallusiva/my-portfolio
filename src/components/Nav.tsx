import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { profile } from '../data/portfolio'
import ThemeToggle from './ThemeToggle'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#dsa', label: 'DSA' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
      <nav className="wrap flex h-16 items-center justify-between" aria-label="Primary">
        <a href="#home" className="flex items-baseline gap-2" onClick={() => setOpen(false)}>
          <span className="font-semibold tracking-tight">{profile.wordmark}</span>
          <span className="hidden font-mono text-xs text-muted sm:inline">/ {profile.role}</span>
        </a>
        <div className="flex items-center gap-5">
          <ul className="hidden items-center gap-6 text-sm md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-muted transition-colors hover:text-ink">{l.label}</a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <button
            type="button"
            className="-mr-2 p-2 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
      {open && (
        <ul id="mobile-menu" className="wrap border-t border-line pb-3 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="block py-3 text-base" onClick={() => setOpen(false)}>{l.label}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}