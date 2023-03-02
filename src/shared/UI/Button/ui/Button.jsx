import styles from './Button.module.css'

const Button = (props) => {
    const { children, disabled = false, color, type, lang } = props
    return (
        <button
            {...props} //enables adding props from Submit button
            className={`${styles.button} 
      ${color === 'pink' ? styles.pink : styles.green} ${
                type === 'submit' ? styles.submit : ''
            } ${lang === 'used' ? styles.lang : ''}`}
            disabled={disabled}
            color={color}
            lang={lang}
        >
            {children}
        </button>
    )
}

export default Button
