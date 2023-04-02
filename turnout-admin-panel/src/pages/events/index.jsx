import * as React from 'react';
import useListEvents from './useListEvents';
import styles from '../Home.module.css';
import ProgramsDropdown from './_programDropdown/ProgramDropdown';
import EventListItem from './_eventListItem/EventListItem';

const EventsList = React.memo(() => {
    const { program, programErrors, programs, onDropdownChange, onAddEventClick, events, errors, onClick } = useListEvents();

    const listProgramOptions = React.useMemo(() => {
        return programs?.data?.programs?.map((program) => {
            return (
                <option key={program._id} value={program._id}>
                    {program.name}
                </option>
            )
        })
    }, [programs])

    const listItems = React.useMemo(() => {
        return events?.data?.events?.map((event) => {
            return (
                <EventListItem
                    key={event._id}
                    event={event}
                    onClick={onClick}
                />
            )
        })
    }, [events, onClick])

    return (
        <div className={styles.container}>
            <div className={styles.headingContainer}>
                <h3>Listing Events</h3>
                <button type="button" className={styles.button} onClick={onAddEventClick}>
                    Create Events
                </button>
            </div>
            <div className={styles.dropdownContainer}>
                <ProgramsDropdown value={program} onChange={onDropdownChange}>
                    {listProgramOptions}
                </ProgramsDropdown>
            </div>
            <div className={styles.listContainer}>{listItems}</div>
            {errors.error === true ? (
                <CustomAlert alertType={AlertTypes.DANGER} message={error.message} />
            ) : (
                <></>
            )}
        </div>
    )
})

export default EventsList;