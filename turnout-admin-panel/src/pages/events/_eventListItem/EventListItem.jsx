import * as React from 'react';
import styles from '../../programs/_item/ProgramListItem.module.css';
import { FiEdit } from 'react-icons/fi';

const EventListItem = React.memo(({ event: { name, description, venue, reportingTime, date, note, contactDetails, _id }, onClick }) => {

    const onButtonClick = React.useCallback(() => {
        onClick(_id);
    }, [onClick, _id])

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div>
                    <p className={styles.text}>Name: {name}</p>
                    <p className={styles.text}>Description: {description}</p>
                    <p className={styles.text}>Venue: {venue}</p>
                    <p className={styles.text}>Reporting Time: {reportingTime}</p>
                    <p className={styles.text}>Date: {date}</p>
                    <p className={styles.text}>Note: {note}</p>
                    <p className={styles.text}>Contact Details: {contactDetails}</p>
                </div>
                <button className={styles.button} onClick={onButtonClick}>
                    <FiEdit className={styles.icon} />
                </button>
            </div>
        </div>
    )
})

export default EventListItem