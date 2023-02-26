import IconCard from './UI/IconCard'
import styles from './Courses.module.css'
import { courses } from '../data/courses'

const Courses = () => {
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
