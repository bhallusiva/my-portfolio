import { skillGroups } from '../data/portfolio'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="wrap grid gap-8 lg:grid-cols-12">
        <h2 className="h2 lg:col-span-4">Technical skills</h2>
        <dl className="divide-y divide-line border-y border-line lg:col-span-8">
          {skillGroups.map((g) => (
            <div key={g.name} className="grid gap-2 py-4 sm:grid-cols-[11rem_1fr]">
              <dt className="text-sm font-semibold">{g.name}</dt>
              <dd className="flex flex-wrap gap-1.5">
                {g.items.map((i) => <span key={i} className="tag">{i}</span>)}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
