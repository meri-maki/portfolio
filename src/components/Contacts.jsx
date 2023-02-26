import { contacts } from '../data/contacts'
import IconCard from './UI/IconCard'
import styles from './Contacts.module.css'

const Contacts = () => {
    return (
        <div className={styles.contacts}>
            {contacts.map((contact) => {
                return (
                    <a href={contact.link} target="_blank" key={contact.name}>
                        <IconCard icon={contact.icon} name={contact.name} />
                    </a>
                )
            })}
        </div>
    )
}

export default Contacts
