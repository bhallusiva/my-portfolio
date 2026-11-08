import { useCallback, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Dsa from './components/Dsa'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Intro, { shouldSkipIntro } from './components/Intro'
import Reveal from './components/Reveal'

export default function App() {
  const [introOn, setIntroOn] = useState(() => !shouldSkipIntro())
  const [ready, setReady] = useState(() => shouldSkipIntro())
  const onLeave = useCallback(() => setReady(true), [])
  const onDone = useCallback(() => setIntroOn(false), [])

  return (
    <>
      {introOn && <Intro onLeave={onLeave} onDone={onDone} />}
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero ready={ready} />
        <Reveal><About /></Reveal>
        <Reveal><Projects /></Reveal>
        <Reveal><Dsa /></Reveal>
        <Reveal><Skills /></Reveal>
        <Reveal><Education /></Reveal>
        <Reveal><Contact /></Reveal>
      </main>
      <Footer />
    </>
  )
}