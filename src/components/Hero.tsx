import { ArrowDown, Download } from 'lucide-react'
import { profile } from '../data/portfolio'
import { GithubIcon, LinkedinIcon } from './Icons'
import TypedCode, { type CodeLine } from './TypedCode'

// Real lines from BankManagementTesting---JUnit5 (src/main/.../BackAccount.java and src/test/.../TestBankAccount.java),
// lightly shortened. The identifiers are shown exactly as they appear in the repository.
const code: CodeLine[] = [
  { t: 'void Withdraw(int amount) {', c: 'k' },
  { t: '    if (amount > balance) {' },
  { t: '        throw new IllegalArgumentException(', c: 'k' },
  { t: '            "you don\'t have sufficient balance...");' },
  { t: '    }' },
  { t: '    balance -= amount;' },
  { t: '}' },
  { t: '' },
  { t: '@Test', c: 'a' },
  { t: 'void testWithdrwShouldMoreThanZero() {' },
  { t: '    assertThrows(IllegalArgumentException.class,', c: 'k' },
  { t: '        () -> accHolder.Withdraw(200000));' },
  { t: '}' },
]

export default function Hero() {
  return (
    <section id="home" className="wrap grid items-center gap-12 py-16 md:py-24 lg:grid-cols-12 lg:gap-10">
      <div className="lg:col-span-7">
        <p className="mb-5 font-mono text-sm text-muted">Bhallu Siva · B.Tech CSE · Visakhapatnam</p>
        <h1 className="text-[clamp(2.4rem,6vw,4.1rem)] font-bold leading-[1.04] tracking-[-0.035em]">
          Building practical software, one problem at a time.
        </h1>
        <p className="lede mt-6 text-lg">
          I’m Bhallu Siva, a Computer Science engineering student focused on Java backend development, REST APIs,
          databases and algorithmic problem-solving. I’ve solved 117 LeetCode problems in Java and built backend,
          testing and computer-vision projects.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#projects" className="btn btn-primary">Explore my projects <ArrowDown size={16} /></a>
          <a href={profile.resume} className="btn" target="_blank" rel="noopener noreferrer">
            <Download size={16} /> View resume
          </a>
        </div>
        <div className="mt-6 flex items-center gap-5 text-sm text-muted">
          <a className="flex items-center gap-2 hover:text-ink" href={profile.github} target="_blank" rel="noopener noreferrer">
            <GithubIcon /> GitHub
          </a>
          <a className="flex items-center gap-2 hover:text-ink" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            <LinkedinIcon /> LinkedIn
          </a>
        </div>
      </div>

      <figure className="lg:col-span-5" aria-label="Excerpt of Java source code from my Bank Account project">
        <div className="overflow-hidden rounded-lg border border-line bg-white shadow-[0_1px_2px_rgb(23_32_51/0.06)]">
          <div className="flex items-center justify-between border-b border-line bg-[#f6f7f9] px-4 py-2.5">
            <span className="font-mono text-xs text-muted">BankManagementTesting---JUnit5</span>
            <span className="font-mono text-xs text-muted">Java 21</span>
          </div>
          <pre className="overflow-x-auto p-4 font-mono text-[0.76rem] leading-6 sm:text-[0.82rem]">
            <code>
              <TypedCode lines={code} />
            </code>
          </pre>
        </div>
        <figcaption className="mt-3 text-xs text-muted">From my JUnit 5 project: a business rule and the test that checks it.</figcaption>
      </figure>
    </section>
  )
}