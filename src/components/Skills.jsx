import IconCard from './UI/IconCard'
import styles from './Skills.module.css'
import { skills } from '../data/skills'

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
