import styles from './Courses.module.css'
import { courses } from '../courses'
import { IconCard } from '~/shared/UI/IconCard'

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
