import styles from './Section.module.css'

const Section = (props) => {
    const { children, size, mode, title, id } = props
    return (
        <div
            id={id}
            className={`${styles.section} ${
                mode && size === 'small' ? styles.dark : ''
            } ${!mode && size === 'small' ? styles.light : ''}
      `}
        >
            <div
                className={`${styles.sectionContent} ${
                    size === 'big' ? styles.big : ''
                } ${size === 'small' ? styles.small : ''} ${
                    !!!size ? styles.standard : ''
                }`}
            >
                {title && <h2>{title}</h2>}
                {children}
            </div>
        </div>
    )
}

export default Section
