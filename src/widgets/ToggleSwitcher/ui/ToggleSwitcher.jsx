import styles from './ToggleSwitcher.module.css'

const ToggleSwitcher = ({ isOn, handleToggle, id, textOn, textOff }) => {
    let textLabel = ''
    if (isOn) {
        textLabel = textOn
    } else {
        textLabel = textOff
    }
    return (
        <div className={styles.switchContainer}>
            <input
                checked={isOn}
                onChange={handleToggle}
                className={styles.switchCheckbox}
                id={id}
                type="checkbox"
            />
            <label
                className={`${styles.switchLabel} ${
                    isOn && styles.switchLabelDark
                }`}
                htmlFor={id}
            >
                <span className={styles.switchButton} />
            </label>
            <div className={styles.switchTextLabel}>{textLabel}</div>
        </div>
    )
}

export default ToggleSwitcher
