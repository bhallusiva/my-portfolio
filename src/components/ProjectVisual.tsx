// Small original diagrams that hint at each project's category.
// These are illustrations, not screenshots of the applications.
const m = 'font-mono text-[0.72rem]'

export default function ProjectVisual({ id }: { id: string }) {
  const box = 'h-28 rounded-md border border-line bg-[#f6f7f9] p-3'
  if (id === 'springboot') {
    const rows = [['GET', '/Products'], ['GET', '/Products/{id}'], ['POST', '/Products'], ['PUT', '/Products'], ['DELETE', '/Products/{id}']]
    return (
      <div className={`${box} space-y-[3px] overflow-hidden`} aria-hidden>
        {rows.map(([v, p]) => (
          <div key={v + p} className={`${m} flex gap-3`}>
            <span className="w-14 text-accent">{v}</span>
            <span className="text-muted">{p}</span>
          </div>
        ))}
      </div>
    )
  }
  if (id === 'bank') {
    const tests = ['testDeposit', 'testWithdraw', 'testDepositShouldBeMoreThanZero', 'testWithdrwShouldMoreThanZero', 'TestBalance']
    return (
      <div className={`${box} space-y-[3px] overflow-hidden`} aria-hidden>
        {tests.map((t) => (
          <div key={t} className={`${m} flex items-center gap-2 text-muted`}>
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="truncate">{t}</span>
          </div>
        ))}
      </div>
    )
  }
  if (id === 'signalminds') {
    const steps = ['Question', 'Rewrite', 'Retrieve', 'Evaluate', 'Answer']
    return (
      <div className={`${box} flex items-center justify-between gap-1`} aria-hidden>
        {steps.map((s, i) => (
          <div key={s} className="flex items-center gap-1">
            <span className={`${m} rounded border border-line bg-white px-1.5 py-1 ${i === 2 ? 'border-accent text-accent' : 'text-muted'}`}>{s}</span>
            {i < steps.length - 1 && <span className="h-px w-2 bg-line" />}
          </div>
        ))}
      </div>
    )
  }
  const pats = [[1, 0, 0, 0, 0], [0, 0, 0, 0, 1], [0, 1, 1, 0, 0], [0, 1, 0, 0, 0], [1, 1, 1, 1, 1]]
  return (
    <div className={`${box} flex items-center justify-between`} aria-hidden>
      {pats.map((p, i) => (
        <div key={i} className="flex items-end gap-[3px]">
          {p.map((on, j) => (
            <span key={j} className={`w-1.5 rounded-sm ${on ? 'h-8 bg-accent' : 'h-3 bg-line'}`} />
          ))}
        </div>
      ))}
    </div>
  )
}
