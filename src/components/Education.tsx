import { certifications, education } from '../data/portfolio'

export default function Education() {
  return (
    <section id="education" className="section bg-white">
      <div className="wrap grid gap-8 lg:grid-cols-12">
        <h2 className="h2 lg:col-span-4">Education and certifications</h2>
        <div className="space-y-10 lg:col-span-8">
          <ul className="space-y-6">
            {education.map((e) => (
              <li key={e.title} className="grid gap-1 border-l-2 border-accent pl-5">
                <p className="font-semibold">{e.title}</p>
                <p className="text-sm text-muted">{e.school}</p>
                <p className="font-mono text-sm">
                  {e.period} · {e.score}{e.note ? ` · ${e.note}` : ''}
                </p>
              </li>
            ))}
          </ul>
          <div>
            <h3 className="font-semibold">Certifications</h3>
            <ul className="mt-3 divide-y divide-line border-y border-line">
              {certifications.map((c) => (
                <li key={c.title} className="flex flex-wrap justify-between gap-2 py-3 text-sm">
                  <span>{c.title}</span>
                  <span className="text-muted">{c.issuer}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
