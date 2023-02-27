import styles from './IconCard.module.css'
const IconCard = ({ icon, name, noLink = false }) => {
    return (
        <div className={noLink ? styles.noLink : styles.iconCard}>
            <div className={styles.icon}>{icon}</div>
            <h3>{name}</h3>
        </div>
    )
}

export default IconCard
