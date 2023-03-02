import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-scroll'
import { RiMenuFill, RiCloseFill } from 'react-icons/ri'
import styles from './Header.module.css'
import { ToggleSwitcher } from '~/widgets/ToggleSwitcher'
import { Button } from '~/shared/UI/Button'

const Header = ({ mode, setMode }) => {
    const { t, i18n } = useTranslation()

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }
    const [burger, setBurger] = useState(false)
    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <div className={styles.headerLogo}>
                    <Link
                        activeClass={styles.activeLink}
                        hashSpy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                        to="about"
                    >
                        {t('head-name')}
                    </Link>
                </div>

                <ul
                    className={
                        burger
                            ? [styles.headerNavList, styles.active].join(' ')
                            : styles.headerNavList
                    }
                >
                    <li>
                        <Link
                            hashSpy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
                            to="about"
                            onClick={() => setBurger(false)}
                        >
                            {t('head-about')}
                        </Link>
                    </li>
                    <li>
                        <Link
                            hashSpy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
                            to="projects"
                            onClick={() => setBurger(false)}
                        >
                            {t('head-projects')}
                        </Link>
                    </li>
                    <li>
                        <Link
                            hashSpy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
                            to="contact"
                            onClick={() => setBurger(false)}
                        >
                            {t('head-contact')}
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
                    <li>
                        <Button lang="used" onClick={toggle}>
                            {t('lang-btn')}
                        </Button>
                    </li>
                </ul>

                <div
                    className={styles.burgerButton}
                    onClick={() => setBurger(!burger)}
                >
                    {burger ? (
                        <RiCloseFill size={25} />
                    ) : (
                        <RiMenuFill size={20} />
                    )}
                </div>
            </div>
        </header>
    )
}
export default Header
