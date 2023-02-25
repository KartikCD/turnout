import { TextField } from '@/auth/_input/TextField';
import * as React from 'react';
import { Form } from 'react-final-form';
import styles from '../add/AddProgram.module.css';
import { TextFieldContainer } from '@/auth/_input/TextFieldContainer';

const ProgramForm = React.memo(({ initialValues, onSubmit }) => {
    const programNameValidator = React.useCallback(async (value) => {
        if (!value) {
            return "Program name required.";
        }
    }, []);

    return (
        <div className={styles.container}>
            <Form
                initialValues={initialValues}
                onSubmit={onSubmit}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <TextFieldContainer
                            validator={programNameValidator}
                            name="name"
                            type="text"
                            className={styles.input}
                            placeholder="Program Name"
                            required
                        />
                        <button type="submit" className={styles.btn}>
                            Submit
                        </button>
                    </form>
                )}
            />
        </div>
    )
})

export default ProgramForm;