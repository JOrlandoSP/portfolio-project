import Nav from './components/nav'
import Home from './components/home'
import Projects from './components/porjects'
import Skills from './components/skills'
import About from './components/about'
import Contact from './components/contact'

import './styles/components/app.sass'

export default function App() {

  return (
    <>
      <Nav />
      <Home />
      <Projects />
      <Skills />
      <About />
      <Contact />
     </>
  )
}

