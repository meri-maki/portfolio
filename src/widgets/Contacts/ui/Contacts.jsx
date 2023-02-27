import { IconCard } from '~/shared/UI/IconCard'
import { contacts } from '../contacts'

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
