import { useEffect, useState } from 'react'
import { dsaPractice, dsaProblems, type DsaProblem } from './dsa.generated'
import { classify } from './dsaTopics'

const OWNER = 'bhallusiva'
const REPO = 'DSA'
const BRANCH = 'master'
const CACHE_KEY = 'dsa-live-v1'
const TTL_MS = 10 * 60 * 1000
const MAX_NEW = 60

export interface DsaData {
  problems: DsaProblem[]
  practice: Record<string, string[]>
  live: boolean // true when this came from GitHub, false when it is the build-time snapshot
}

const snapshot: DsaData = { problems: dsaProblems, practice: dsaPractice, live: false }

function readCache(): DsaData | null {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY)
    if (!raw) return null
    const { at, data } = JSON.parse(raw) as { at: number; data: DsaData }
    return Date.now() - at < TTL_MS ? data : null
  } catch {
    return null
  }
}

function writeCache(data: DsaData) {
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), data }))
  } catch {
    /* storage unavailable: ignore */
  }
}

async function fetchProblem(dir: string): Promise<DsaProblem | null> {
  const m = dir.match(/^(\d{4})-(.+)$/)
  if (!m) return null
  try {
    const res = await fetch(`https://raw.githubusercontent.com/${OWNER}/${REPO}/${BRANCH}/${encodeURIComponent(dir)}/README.md`)
    if (!res.ok) return null
    const md = await res.text()
    const h = md.match(/<h2><a href="([^"]+)">\d+\.\s*([^<]+)<\/a><\/h2><h3>(Easy|Medium|Hard)<\/h3>/)
    if (!h) return null
    const n = Number(m[1])
    return { n, dir, title: h[2].trim(), lc: h[1], d: h[3] as DsaProblem['d'], t: classify(n, m[2]) }
  } catch {
    return null
  }
}

async function load(): Promise<DsaData> {
  const cached = readCache()
  if (cached) return cached
  try {
    const res = await fetch(`https://api.github.com/repos/${OWNER}/${REPO}/git/trees/${BRANCH}?recursive=1`, {
      headers: { Accept: 'application/vnd.github+json' },
    })
    if (!res.ok) return snapshot
    const { tree } = (await res.json()) as { tree: { path: string; type: string }[] }

    const dirs = tree.filter((e) => e.type === 'tree' && /^\d{4}-/.test(e.path)).map((e) => e.path)
    const known = new Map(dsaProblems.map((p) => [p.dir, p]))
    const fresh = dirs.filter((d) => !known.has(d)).slice(0, MAX_NEW)
    const fetched = (await Promise.all(fresh.map(fetchProblem))).filter((p): p is DsaProblem => p !== null)

    const dirSet = new Set(dirs)
    const problems = [...dsaProblems.filter((p) => dirSet.has(p.dir)), ...fetched].sort((a, b) => a.n - b.n)

    const practice: Record<string, string[]> = {}
    for (const e of tree) {
      const parts = e.path.split('/')
      if (e.type === 'blob' && parts.length === 2 && parts[1].endsWith('.java') && !/^\d{4}-/.test(parts[0]) && !parts[0].startsWith('.')) {
        ;(practice[parts[0]] ??= []).push(parts[1])
      }
    }

    const data: DsaData = { problems, practice: Object.keys(practice).length ? practice : dsaPractice, live: true }
    writeCache(data)
    return data
  } catch {
    return snapshot
  }
}

let pending: Promise<DsaData> | null = null
const loadOnce = () => (pending ??= load())

export function useDsaData(): DsaData {
  const [data, setData] = useState<DsaData>(() => readCache() ?? snapshot)
  useEffect(() => {
    let active = true
    loadOnce().then((d) => active && setData(d))
    return () => {
      active = false
    }
  }, [])
  return data
}