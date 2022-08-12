import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import AboutMe from "./components/AboutMe"
import TechStacks from "./components/TechStacks"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import SocialLinks from "./components/SocialLinks"
import '@fortawesome/fontawesome-free/css/all.css'
import 'aos/dist/aos.css'
import 'swiper/css';
import "swiper/css/effect-cards";

function App(){
  return(
    <div>
      <Navbar/>
      <SocialLinks/>
      <Hero/>
      <AboutMe/>
      <TechStacks/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App;