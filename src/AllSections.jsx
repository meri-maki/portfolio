import { Link } from 'react-scroll'
import Button from './components/UI/Button'
import Section from './components/UI/Section'
import Skills from './components/Skills'
import Contacts from './components/Contacts'
import MainPhotoCollage from './components/MainPhotoCollage'
import Projects from './components/Projects'
import Courses from './components/Courses'
import ContactForm from './components/ContactForm'

const AllSections = ({ mode }) => {
    return (
        <>
            <Section size="big" mode={mode} id="about">
                <div className="section-about-text-block">
                    <h1>Hey✨ I’m Ana, Frontend React Developer</h1>
                    <p>
                        I've been working in the field of{' '}
                        <span className="bold-p">design</span> and{' '}
                        <span className="bold-p">web development</span> for over
                        two years, and I've been entirely dedicated to the{' '}
                        <span className="bold-p">frontend development</span>{' '}
                        since June 2022.
                        <br />
                        <br />
                        In my spare time, I enjoy hanging out with my family,
                        watching movies and anime, and practicing archery.
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
                            href="Anastasia-Zhuravleva-CV-eng.pdf"
                            target="_blank"
                            download="Anastasia-Zhuravleva-CV-eng.pdf"
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
                            Liked my work? I’m currently open for remote work
                            <br /> as Junior+ / Middle Frontend Developer.
                        </p>
                        <div className="button-container">
                            <a
                                href="Anastasia-Zhuravleva-CV-eng.pdf"
                                target="_blank"
                                download="Anastasia-Zhuravleva-CV-eng.pdf"
                            >
                                <Button color="green">CV ENG</Button>
                            </a>
                            <a
                                href="Anastasia-Zhuravleva-CV-RUS.pdf"
                                target="_blank"
                                download="Anastasia-Zhuravleva-CV-RUS.pdf"
                            >
                                <Button color="pink">CV RUS</Button>
                            </a>
                        </div>
                        <Contacts />
                    </div>
                    <ContactForm mode={mode} />
                </div>
            </Section>
        </>
    )
}

export default AllSections
