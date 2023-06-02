import Navbar from './components/navbar'
import Home from './components/home'
import Projects from './components/projects'
import Skills from './components/skills'
import About from './components/about'
import Contact from './components/contact'

import './styles/components/app.sass'

export default function App() {

  return (
    <div id='portfolio'>
      <Navbar />
      <Home />
      <Projects />
      <Skills />
      <About />
      <Contact />
     </div>
  )
}

