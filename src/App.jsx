import { useState, useEffect } from "react"
import { Link } from "react-scroll"
import Header from "./components/Header"
import Button from "./components/UI/Button"
import Section from "./components/UI/Section"
import Skills from "./components/Skills"
import Contacts from "./components/Contacts"
import MainPhotoCollage from "./components/MainPhotoCollage"
import Projects from "./components/Projects"
import Courses from "./components/Courses"
import "./App.css"
import ContactForm from "./components/ContactForm"
import Footer from "./components/Footer"

function App() {
  const getCurrentTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
  const [mode, setMode] = useState(getCurrentTheme())

  return (
    <div className={mode ? "modeDark" : "modeLight"}>
      <div className="wrapper">
        <Header mode={mode} setMode={setMode} />

        <Section size="big" mode={mode} id="about">
          <div className="section-about-text-block">
            <h1>Hey✨ I’m Ana, Junior Frontend Developer</h1>
            <p>
              I’m learning to code on Codecademy and YouTube. <br />
              I’m passionate about coding, contemporary art and archery.
            </p>
            <div className="button-container">
              <Link
                hashSpy={true}
                smooth={true}
                offset={-50}
                duration={500}
                to="contact"
              >
                <Button color="pink">Contact me</Button>
              </Link>
              <a
                href="../assets/Anastasia-Zhuravleva-CV-eng.pdf"
                target="_blank"
                download
              >
                <Button color="green">Download CV</Button>
              </a>
            </div>
          </div>
          <MainPhotoCollage />
        </Section>

        <Section size="small" mode={mode} title="Skills & Tools">
          <div>
            <Skills />
          </div>
        </Section>
        <Section mode={mode} title="Latest projects" id="projects">
          <Projects mode={mode} />
        </Section>
        <Section mode={mode} title="Courses & Certificates" size="small">
          <Courses mode={mode} />
        </Section>
        <Section mode={mode} title="Lets work together!" id="contact">
          <div className="section-contacts">
            <div className="section-contact-links">
              <p>
                Liked my work? I’m currently open for remote work as Junior or
                Intern Frontend Developer or Web Developer.
              </p>
              <div className="button-container">
                <a
                  href="../assets/Anastasia-Zhuravleva-CV-eng.pdf"
                  target="_blank"
                  download
                >
                  <Button color="green">CV ENG</Button>
                </a>
                <a
                  href="../assets/Anastasia-Zhuravleva-CV-RUS.pdf"
                  target="_blank"
                  download
                >
                  <Button color="pink">CV RUS</Button>
                </a>
              </div>
              <Contacts />
            </div>
            <ContactForm mode={mode} />
          </div>
        </Section>
        <Footer />
      </div>
    </div>
  )
}

export default App
