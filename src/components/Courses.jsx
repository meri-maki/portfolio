import { SiCodecademy, SiYoutube } from "react-icons/si"
import { RiCodeLine } from "react-icons/ri"
import IconCard from "./UI/IconCard"
import styles from "./Courses.module.css"

const Courses = () => {
  const courses = [
    {
      name: "FrontEnd Engineer (in progress)",
      icon: <SiCodecademy />,
      link: "",
    },
    {
      name: "Learn Javascript",
      icon: <SiCodecademy />,
      link: "",
    },
    {
      name: "Learn HTML",
      icon: <SiCodecademy />,
      link: "",
    },
    {
      name: "Learn CSS",
      icon: <SiCodecademy />,
      link: "",
    },
    {
      name: "Learn Git & GitHub",
      icon: <SiCodecademy />,
      link: "",
    },
    {
      name: "Bogdan Stashchuk Javascript Course",
      icon: <RiCodeLine />,
      link: "",
    },
    {
      name: "Bogdan Stashchuk React Course",
      icon: <RiCodeLine />,
      link: "",
    },
    {
      name: "Lots lots lots of YouTube",
      icon: <SiYoutube />,
      link: "",
    },
  ]
  return (
    <div className={styles.courses}>
      {courses.map((course) => (
        <IconCard noLink key={course.name} name={course.name} icon={course.icon} />
      ))}
    </div>
  )
}

export default Courses
