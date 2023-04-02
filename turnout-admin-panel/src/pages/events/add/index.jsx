import * as React from "react";
import styles from "../../programs/add/AddProgram.module.css";
import EventForm from "../_form/EventForm";
import useAddEvent from "./useAddEvent";

const AddEvent = React.memo(() => {
    const { initialValues, onSubmit, programData } = useAddEvent();

    const listOptions = React.useMemo(() => {
        return programData?.data?.programs?.map((program) => {
            return (
                <option key={program._id} value={program._id}>
                    {program.name}
                </option>
            )
        });
    }, [programData])

    return (
        <div className={styles.container}>
            <h3>Add Event</h3>
            <div className={styles.formContainer}>
                <EventForm initialValues={initialValues} onSubmit={onSubmit}>
                    {listOptions}
                </EventForm>
            </div>
        </div >
    );
});

export default AddEvent;
