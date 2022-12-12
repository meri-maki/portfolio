import styles from "./Button.module.css"

const Button = (props) => {
  const { children, disabled = false, color, type } = props
  return (
    <button
      {...props} //enables adding props from Submit button
      className={`${styles.button} 
      ${color === "pink" ? styles.pink : styles.green} ${type === "submit" ? styles.submit : ''}`
      }
      disabled={disabled}
      color={color}
    >
      {children}
    </button>
  )
}

export default Button
