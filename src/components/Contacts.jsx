import { SiTelegram, SiMaildotru, SiGithub, SiLinkedin } from "react-icons/si"
import { SlSocialLinkedin } from "react-icons/sl"
import { BsFillBriefcaseFill } from "react-icons/bs"


import IconCard from "./UI/IconCard"
import styles from "./Contacts.module.css"

const Contacts = () => {
  const contacts = [
    {
      name: "telegram/ana_zhuravleva",
      icon: <SiTelegram />,
      link: "https://t.me/ana_zhuravleva",
    },
    { name: "work@anastasiazhuravleva.ru", icon: <SiMaildotru />, link: "mailto: work@anastasiazhuravleva.ru" },
    { name: "github/meri-maki", icon: <SiGithub />, link: "https://github.com/meri-maki" },
    {
      name: "linkedin.com/anazhuravleva",
      icon: <SlSocialLinkedin />,
      link: "https://www.linkedin.com/in/anazhuravleva/",
    },{
      name: "HeadHunter.ru/anazhuravleva",
      icon: <BsFillBriefcaseFill />,
      link: "https://mozhaisk.hh.ru/resume/23bfa3a6ff0825d70a0039ed1f304a746c6557",
    },
  ]

  return (
    <div className={styles.contacts}>
      {contacts.map((contact) => {
        return (
          <a href={contact.link} target='_blank' key={contact.name}>
            <IconCard
              icon={contact.icon}
              name={contact.name}

            />
          </a>
        )
      })}
    </div>
  )
}

export default Contacts
