import {useEffect, useState} from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import About from "./components/About.jsx"
import Skills from "./components/Skills.jsx"
import Certificates from "./components/Certificates.jsx"
import Projects from "./components/Projects.jsx"
import Contact from "./components/Contact.jsx"
import Footer from "./components/Footer.jsx"

const App = () => {
    const [darkMode, setDarkMode] = useState(true)

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            offset: 100
        })
        document.documentElement.classList.add('dark')
    },[])

    useEffect(() => {
        AOS.refresh()
    },[darkMode])

    const toggleDarkMode = () => {
        const newMode = !darkMode
        setDarkMode(newMode)
        document.documentElement.classList.toggle('dark')
    }

    return (
        <div className={
            darkMode
                ? 'bg-linear-to-br from-gray-900 via-[#2e0d10] to-red-900 min-h-screen'
                : 'bg-linear-to-br from-gray-50 to-red-50 min-h-screen'
        }>
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Hero />
            <About />
            <Skills />
            <Certificates />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export default App