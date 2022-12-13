import Button from "./Button"
import styles from "./ProjectCard.module.css"

const ProjectCard = ({ title, description, stack, img, mainLink, gitLink }) => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.imageContainer}>{img}</div>
      <div className={styles.descriptionContainer}>
        <h3>{title}</h3>
        <p>
          {description}
          <br></br>
          <br></br>
          <span className={styles.descriptionStack}>STACK</span>: {stack}
        </p>
        <div className={styles.descriptionButtonContainer}>
          {mainLink && (
            <a href={mainLink} target="_blank">
              <Button color="pink">Visit Website</Button>
            </a>
          )}
          {gitLink && (
            <a href={gitLink} target="_blank">
              <Button>Show Git Repo</Button>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
