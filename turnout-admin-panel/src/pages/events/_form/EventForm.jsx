import * as React from "react";
import classnames from "classnames";
import styles from "../../programs/add/AddProgram.module.css";
import { Field, Form } from "react-final-form";
import { TextField } from "@/ui-components/_textField/TextField";
import { DropdownContainer } from "@/util-components/DropdownContainer";

const EventForm = React.memo(({ initialValues, onSubmit, children }) => {
  React.useEffect(() => {
    window.document.getElementById("date").min = new Date()
      .toISOString()
      .split("T")[0];
  }, []);

  const nameValidator = React.useCallback(async (value) => {
    if (!value) {
      return "Event name required."
    }
  }, [])

  const venueValidator = React.useCallback(async (value) => {
    if (!value) {
      return "Event venue required."
    }
  }, [])

  const descriptionValidator = React.useCallback(async (value) => {
    if (!value) {
      return "Event description required."
    }
  }, [])

  const dateValidator = React.useCallback(async (value) => {
    if (!value) {
      return "Event date required."
    }
  }, [])

  const reportingTimeValidator = React.useCallback(async (value) => {
    if (!value) {
      return "Event reporting time required."
    }
  }, [])

  const contactDetailsValidator = React.useCallback(async (value) => {
    if (!value) {
      return "Event contact details required."
    }
  }, [])

  return (
    <div className={styles.container}>
      <Form
        keepDirtyOnReinitialize
        initialValues={initialValues}
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <TextField
              validator={nameValidator}
              name="name"
              type="text"
              className={classnames(styles.input, styles.inputWithMargin)}
              placeholder="Event Name"
              required
            />

            <TextField
              validator={venueValidator}
              name="venue"
              type="text"
              className={classnames(styles.input, styles.inputWithMargin)}
              placeholder="Event Venue"
              required
            />

            <Field name="description" validate={descriptionValidator}>
              {({ input: { value, onChange }, meta: { touched, error } }) => (
                <div>
                  <label htmlFor="description"></label>
                  <textarea
                    name="description"
                    id="description"
                    rows="5"
                    required
                    value={value}
                    onChange={onChange}
                    className={classnames(styles.input, styles.inputWithMargin)}
                    placeholder="Event Description"
                  />
                  {error && touched && <span>{error}</span>}
                </div>
              )}
            </Field>

            <TextField
              validator={dateValidator}
              name="date"
              type="date"
              className={classnames(styles.input, styles.inputWithMargin)}
              placeholder="Event Date"
              id="date"
              required
            />

            <DropdownContainer name="programId" title="Program ">
              {children}
            </DropdownContainer>

            <TextField
              validator={reportingTimeValidator}
              name="reportingTime"
              type="text"
              className={classnames(styles.input, styles.inputWithMargin)}
              placeholder="Event Reporting Time"
              required
            />

            <TextField
              name="note"
              type="text"
              className={classnames(styles.input, styles.inputWithMargin)}
              placeholder="Event Note"
            />

            <TextField
              validator={contactDetailsValidator}
              name="contactDetails"
              type="text"
              className={classnames(styles.input, styles.inputWithMargin)}
              placeholder="Event Contact Details"
              required
            />

            <div>
              <input type="file" onChange={(e) => { console.log(e.target.files) }} accept="image/*" />
            </div>

            <button type="submit" className={styles.btn}>
              Submit
            </button>
          </form>
        )}
      />
    </div>
  );
});

export default EventForm;
