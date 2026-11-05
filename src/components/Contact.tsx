import { Download, Mail } from 'lucide-react'
import { profile } from '../data/portfolio'
import { GithubIcon, LinkedinIcon } from './Icons'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="wrap grid gap-8 lg:grid-cols-12">
        <h2 className="h2 lg:col-span-4">Contact</h2>
        <div className="lg:col-span-8">
          <p className="lede">The best way to reach me is email. I’m happy to talk about internships, entry-level backend roles or my projects.</p>
          <a className="mt-5 inline-block text-xl font-semibold text-accent hover:underline sm:text-2xl" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}><Mail size={16} /> Send email</a>
            <a className="btn" href={profile.github} target="_blank" rel="noopener noreferrer"><GithubIcon width={16} height={16} /> GitHub</a>
            <a className="btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer"><LinkedinIcon width={16} height={16} /> LinkedIn</a>
            <a className="btn" href={profile.resume} download="Bhallu_Siva_Resume.pdf"><Download size={16} /> Resume (PDF)</a>
          </div>
        </div>
      </div>
    </section>
  )
}
