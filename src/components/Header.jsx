import { useState } from "react"
import { Link } from "react-scroll"
import { RiMenuFill, RiCloseFill } from "react-icons/ri"
import ToggleSwitcher from "./UI/ToggleSwitcher"
import styles from "./Header.module.css"

const Header = ({ mode, setMode }) => {
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
            Ana Zhuravleva
          </Link>
        </div>

        <ul
          className={
            burger
              ? [styles.headerNavList, styles.active].join(" ")
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
              onClick={() => setBurger(false)}
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
              onClick={() => setBurger(false)}
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

        <div className={styles.burgerButton} onClick={() => setBurger(!burger)}>
          {burger ? <RiCloseFill size={25} /> : <RiMenuFill size={20} />}
        </div>
      </div>
    </header>
  )
}
export default Header
