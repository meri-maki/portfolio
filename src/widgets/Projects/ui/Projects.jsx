import { ProjectCard } from '~/shared/UI/ProjectCard'
import { projects } from '../projects'

const Projects = ({ mode }) => {
    const projectsData = projects(mode)
    return projectsData.map((project) => {
        return (
            <ProjectCard
                key={project.name}
                name={project.name}
                title={project.title}
                description={project.description}
                descriptionRu={project.descriptionRu}
                stack={project.stack}
                img={project.img}
                mainLink={project.mainLink}
                gitLink={project.gitLink}
            />
        )
    })
}

export default Projects
