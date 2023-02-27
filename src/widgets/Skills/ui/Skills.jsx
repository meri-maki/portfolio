
import { IconCard } from '~/shared/UI/IconCard'
import { skills } from '../skills'
import styles from './Skills.module.css'


const Skills = () => {
    return (
        <div className={styles.skills}>
            {skills.map((skill) => {
                return (
                    <IconCard
                        noLink
                        icon={skill.icon}
                        name={skill.name}
                        key={skill.name}
                    />
                )
            })}
        </div>
    )
}

export default Skills
