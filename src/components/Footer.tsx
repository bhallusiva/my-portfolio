import { profile } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="border-t border-line py-8 text-sm text-muted">
      <div className="wrap flex flex-wrap items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <ul className="flex gap-5">
          <li><a className="hover:text-ink" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a className="hover:text-ink" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a className="hover:text-ink" href={`mailto:${profile.email}`}>Email</a></li>
        </ul>
      </div>
    </footer>
  )
}
