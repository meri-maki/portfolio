import { useTranslation } from 'react-i18next'
import { Button } from '../../Button'
import styles from './ProjectCard.module.css'

const ProjectCard = ({
    title,
    description,
    descriptionRu,
    stack,
    img,
    mainLink,
    gitLink,
}) => {
    const { t, i18n } = useTranslation()

    return (
        <div className={styles.projectCard}>
            <div className={styles.imageContainer}>{img}</div>
            <div className={styles.descriptionContainer}>
                <h3>{title}</h3>
                <p>
                    {i18n.language === 'ru' ? descriptionRu : description}
                    <br></br>
                    <br></br>
                    <span className={styles.descriptionStack}>STACK</span>:{' '}
                    {stack}
                </p>
                <div className={styles.descriptionButtonContainer}>
                    {mainLink && (
                        <a href={mainLink} target="_blank">
                            <Button color="pink">{t('demo-btn')}</Button>
                        </a>
                    )}
                    {gitLink && (
                        <a href={gitLink} target="_blank">
                            <Button>{t('git-btn')}</Button>
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
