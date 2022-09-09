import React from "react"

import Hero from "./components/Hero"
import AboutMe from "./components/AboutMe"
import TechStacks from "./components/TechStacks"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

import '@fortawesome/fontawesome-free/css/all.css'
import 'aos/dist/aos.css'
import 'swiper/css';
import "swiper/css/effect-cards";
import '@heroicons/react/outline'

function App(){
  return(
    <div>
      <Hero/>
      <AboutMe/>
      <TechStacks/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App;