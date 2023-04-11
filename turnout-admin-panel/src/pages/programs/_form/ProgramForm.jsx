import * as React from 'react';
import { Form } from 'react-final-form';
import styles from '../add/AddProgram.module.css';
import { TextFieldContainer } from '@/auth/_input/TextFieldContainer';

const ProgramForm = React.memo(({ initialValues, onSubmit }) => {

    const [files, setFiles] = React.useState();

    const programNameValidator = React.useCallback(async (value) => {
        if (!value) {
            return "Program name required.";
        }
    }, []);

    const onButtonClick = React.useCallback(async (values) => {
        onSubmit(values, files[0])
    }, [files, onSubmit])

    return (
        <div className={styles.container}>
            <Form
                initialValues={initialValues}
                onSubmit={onButtonClick}
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

                        <div>
                            <input type="file" onChange={(e) => { setFiles(e.target.files) }} accept="image/*" />
                        </div>

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