import { useRef, useState } from 'react'
import { ArrowUpRight, X } from 'lucide-react'
import { projects, type Project } from '../data/portfolio'
import { GithubIcon } from './Icons'
import ProjectVisual from './ProjectVisual'

function Card({ p, onOpen }: { p: Project; onOpen: (p: Project) => void }) {
  return (
    <article className="flex flex-col rounded-lg border border-line bg-white p-5">
      <ProjectVisual id={p.id} />
      <div className="mt-5 flex items-center justify-between gap-3">
        <span className="font-mono text-xs text-accent">{p.kind}</span>
        <span className="text-xs text-muted">{p.highlight}</span>
      </div>
      <h3 className="mt-2 text-xl font-semibold tracking-tight">{p.title}</h3>
      <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{p.summary}</p>
      <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
        {p.stack.map((s) => <li key={s} className="tag">{s}</li>)}
      </ul>
      <div className="mt-auto flex items-center gap-4 pt-5 text-sm font-medium">
        <button type="button" className="link" onClick={() => onOpen(p)} aria-haspopup="dialog">Read details</button>
        <a className="flex items-center gap-1.5 hover:text-accent" href={p.repo} target="_blank" rel="noopener noreferrer">
          <GithubIcon width={15} height={15} /> Source <ArrowUpRight size={14} />
        </a>
      </div>
    </article>
  )
}

function Detail({ p, dlg }: { p: Project | null; dlg: React.RefObject<HTMLDialogElement | null> }) {
  const list = 'mt-2 list-disc space-y-1.5 pl-5 text-[0.95rem] leading-relaxed'
  return (
    <dialog
      ref={dlg}
      aria-labelledby="detail-title"
      className="m-auto max-h-[88vh] w-[min(42rem,calc(100%-2rem))] overflow-y-auto rounded-lg border border-line bg-white p-0 text-ink"
      onClick={(e) => { if (e.target === e.currentTarget) e.currentTarget.close() }}
    >
      {p && (
        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-xs text-accent">{p.kind}</p>
              <h3 id="detail-title" className="mt-1 text-2xl font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-1 text-sm text-muted">{p.status}</p>
            </div>
            <button type="button" aria-label="Close details" className="-m-2 p-2 text-muted hover:text-ink" onClick={() => dlg.current?.close()}>
              <X size={20} />
            </button>
          </div>
          <dl className="mt-6 space-y-5">
            <div><dt className="font-semibold">Problem</dt><dd className="mt-1 text-[0.95rem] leading-relaxed text-muted">{p.problem}</dd></div>
            <div><dt className="font-semibold">What I built</dt><dd className="mt-1 text-[0.95rem] leading-relaxed text-muted">{p.built}</dd></div>
            <div><dt className="font-semibold">Implemented in the code</dt><dd><ul className={list}>{p.features.map((f) => <li key={f}>{f}</li>)}</ul></dd></div>
            <div><dt className="font-semibold">Engineering decisions</dt><dd><ul className={list}>{p.decisions.map((f) => <li key={f}>{f}</li>)}</ul></dd></div>
            <div><dt className="font-semibold">Current limits</dt><dd><ul className={list}>{p.limits.map((f) => <li key={f}>{f}</li>)}</ul></dd></div>
          </dl>
          <ul className="mt-6 flex flex-wrap gap-1.5">{p.stack.map((s) => <li key={s} className="tag">{s}</li>)}</ul>
          <a className="btn btn-primary mt-7" href={p.repo} target="_blank" rel="noopener noreferrer">
            <GithubIcon width={16} height={16} /> View repository
          </a>
        </div>
      )}
    </dialog>
  )
}

export default function Projects() {
  const dlg = useRef<HTMLDialogElement>(null)
  const [active, setActive] = useState<Project | null>(null)
  const open = (p: Project) => { setActive(p); requestAnimationFrame(() => dlg.current?.showModal()) }
  return (
    <section id="projects" className="section">
      <div className="wrap">
        <div className="grid gap-4 lg:grid-cols-12">
          <h2 className="h2 lg:col-span-4">Selected projects</h2>
          <p className="lede lg:col-span-8">
            Four repositories, ordered by relevance to backend work. Each card describes what the code in the
            repository does today, including what is not finished yet.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {projects.filter((p) => p.featured).map((p) => <Card key={p.id} p={p} onOpen={open} />)}
        </div>
        <p className="mt-6 text-sm text-muted">
          There is also a{' '}
          <a className="link" href="https://github.com/bhallusiva/FrontWorkOf-GCP" target="_blank" rel="noopener noreferrer">single-page landing draft</a>{' '}
          for the gesture project. No live demos are deployed, so every project links to its source.
        </p>
      </div>
      <Detail p={active} dlg={dlg} />
    </section>
  )
}
