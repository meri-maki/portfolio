import { RiReactjsLine } from 'react-icons/ri'
import {
    SiJavascript,
    SiReactrouter,
    SiBootstrap,
    SiFigma,
    SiAdobephotoshop,
    SiHtml5,
    SiCss3,
    SiVisualstudiocode,
    SiTypescript,
    SiGit,
    SiJirasoftware,
    SiRedux,
    SiTailwindcss,
    SiNextdotjs,
    SiFramer,
    SiWebpack,
    SiJest,
    SiStorybook,
    SiEslint,
} from 'react-icons/si'
import { MdOutlineDevices } from 'react-icons/md'
import { TbApi } from 'react-icons/tb'
import IconCard from './UI/IconCard'
import styles from './Skills.module.css'

const Skills = () => {
    const skills = [
        { name: 'HTML5', icon: <SiHtml5 /> },
        { name: 'CSS3', icon: <SiCss3 /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'TypeScript', icon: <SiTypescript /> },
        { name: 'REST API', icon: <TbApi /> },
        { name: 'React', icon: <RiReactjsLine /> },
        { name: 'Router', icon: <SiReactrouter /> },
        { name: 'Redux', icon: <SiRedux /> },
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'Framer Motion', icon: <SiFramer /> },
        { name: 'Webpack', icon: <SiWebpack /> },
        { name: 'Eslint', icon: <SiEslint /> },
        { name: 'Jest', icon: <SiJest /> },
        { name: 'Storybook', icon: <SiStorybook /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
        { name: 'Bootstrap', icon: <SiBootstrap /> },
        { name: 'Responsive Websites', icon: <MdOutlineDevices /> },
        { name: 'VS Code', icon: <SiVisualstudiocode /> },
        { name: 'GIT', icon: <SiGit /> },
        { name: 'Jira', icon: <SiJirasoftware /> },
        { name: 'Figma', icon: <SiFigma /> },
        { name: 'Adobe PS', icon: <SiAdobephotoshop /> },
    ]

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
