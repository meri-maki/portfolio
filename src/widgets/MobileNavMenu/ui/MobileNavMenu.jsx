import styles from './MobileNavMenu.module.css'

const MobileNavMenu = (mode) => {
    return (
        <div className={styles.mobileNavMenu}>
            <ul>
                <li>
                    <Link
                        hashSpy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                        to="about"
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        hashSpy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                        to="projects"
                    >
                        Projects
                    </Link>
                </li>
                <li>
                    <Link
                        hashSpy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                        to="contact"
                    >
                        Contact
                    </Link>
                </li>
                <li>
                    <ToggleSwitcher
                        isOn={mode}
                        handleToggle={() => setMode(!mode)}
                        id="id"
                        textOn="Dark"
                        textOff="Light"
                    />
                </li>
            </ul>
        </div>
    )
}

export default MobileNavMenu
