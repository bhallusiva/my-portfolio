import { useMemo, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { dsaPractice, dsaProblems, type Difficulty } from '../data/dsa.generated'
import { workflow } from '../data/portfolio'
import { GithubIcon } from './Icons'

const REPO = 'https://github.com/bhallusiva/DSA'
const BRANCH = 'master'
const dTone: Record<Difficulty, string> = { Easy: 'text-muted', Medium: 'text-ink', Hard: 'text-accent font-semibold' }

export default function Dsa() {
  const topics = useMemo(() => {
    const m = new Map<string, typeof dsaProblems>()
    dsaProblems.forEach((p) => m.set(p.t, [...(m.get(p.t) ?? []), p]))
    return [...m.entries()].sort((a, b) => b[1].length - a[1].length)
  }, [])
  const [topic, setTopic] = useState(topics[0][0])
  const list = topics.find(([t]) => t === topic)![1]
  const count = (d: Difficulty) => dsaProblems.filter((p) => p.d === d).length
  const practiceTotal = Object.values(dsaPractice).flat().length

  return (
    <section id="dsa" className="section bg-white">
      <div className="wrap">
        <div className="grid gap-4 lg:grid-cols-12">
          <h2 className="h2 lg:col-span-4">Problem solving and DSA</h2>
          <div className="lg:col-span-8">
            <p className="lede">
              I solve algorithm problems in Java and keep every solution in a public repository, one folder per
              LeetCode problem with the problem statement beside the code.
            </p>
            <p className="mt-4 font-mono text-sm">
              {dsaProblems.length} problems · {count('Easy')} easy · {count('Medium')} medium · {count('Hard')} hard
            </p>
            <p className="mt-1 text-sm text-muted">
              Counted from the repository folders. Plus {practiceTotal} practice files on arrays, patterns, loops, recursion and linked lists.
            </p>
            <a className="btn mt-5" href={REPO} target="_blank" rel="noopener noreferrer">
              <GithubIcon width={16} height={16} /> Open the DSA repository <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <ol className="mt-12 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
          {workflow.map((w, i) => (
            <li key={w.step} className="bg-paper p-4">
              <span className="font-mono text-xs text-accent">{i + 1}</span>
              <p className="mt-1 text-sm font-semibold">{w.step}</p>
              <p className="mt-1 text-[0.8rem] leading-snug text-muted">{w.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <div role="tablist" aria-label="Topics" className="flex flex-wrap gap-2 lg:col-span-3 lg:flex-col lg:gap-1">
            {topics.map(([t, ps]) => (
              <button
                key={t}
                role="tab"
                type="button"
                id={`tab-${t}`}
                aria-selected={t === topic}
                aria-controls="topic-panel"
                onClick={() => setTopic(t)}
                className={`flex items-center justify-between gap-4 rounded-md border px-3 py-2 text-left text-sm transition-colors ${
                  t === topic ? 'border-accent bg-accent-soft text-accent' : 'border-line bg-paper text-ink hover:border-accent'
                }`}
              >
                <span>{t}</span>
                <span className="font-mono text-xs">{ps.length}</span>
              </button>
            ))}
          </div>
          <div id="topic-panel" role="tabpanel" aria-labelledby={`tab-${topic}`} className="lg:col-span-9">
            <ul className="grid max-h-[26rem] gap-x-6 overflow-y-auto rounded-lg border border-line bg-paper p-2 sm:grid-cols-2">
              {list.map((p) => (
                <li key={p.dir} className="flex items-baseline justify-between gap-3 border-b border-line/70 px-2 py-2 text-sm last:border-0">
                  <a className="min-w-0 hover:text-accent" href={`${REPO}/tree/${BRANCH}/${p.dir}`} target="_blank" rel="noopener noreferrer">
                    <span className="mr-2 font-mono text-xs text-muted">{p.n}</span>{p.title}
                  </a>
                  <span className={`shrink-0 text-xs ${dTone[p.d]}`}>{p.d}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-muted">Each link opens that problem’s folder on GitHub (solution and statement). Topics are my own grouping of the solutions.</p>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="font-semibold">Practice folders</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {Object.entries(dsaPractice).map(([dir, files]) => (
              <li key={dir}>
                <a className="tag inline-flex gap-2 py-1 hover:border-accent" href={`${REPO}/tree/${BRANCH}/${encodeURIComponent(dir)}`} target="_blank" rel="noopener noreferrer">
                  {dir} <span className="text-muted">{files.length}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
