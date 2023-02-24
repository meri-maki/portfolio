import { SiCodecademy, SiYoutube } from 'react-icons/si'
import { RiCodeLine } from 'react-icons/ri'
import IconCard from './UI/IconCard'
import styles from './Courses.module.css'

const Courses = () => {
    const courses = [
        {
            name: 'Ulbi TV Advanced Frontend ',
            icon: <SiYoutube />,
        },
        {
            name: 'Learn Javascript',
            icon: <SiCodecademy />,
        },
        {
            name: 'Learn HTML',
            icon: <SiCodecademy />,
        },
        {
            name: 'Learn CSS',
            icon: <SiCodecademy />,
        },
        {
            name: 'Learn Git & GitHub',
            icon: <SiCodecademy />,
        },
        {
            name: 'Bogdan Stashchuk Javascript Course',
            icon: <RiCodeLine />,
        },
        {
            name: 'Bogdan Stashchuk React Course',
            icon: <RiCodeLine />,
        },
        {
            name: 'Lots lots lots of YouTube',
            icon: <SiYoutube />,
        },
    ]
    return (
        <div className={styles.courses}>
            {courses.map((course) => (
                <IconCard
                    noLink
                    key={course.name}
                    name={course.name}
                    icon={course.icon}
                />
            ))}
        </div>
    )
}

export default Courses
