import * as React from 'react';
import { Form } from 'react-final-form';
import { TextField } from '../../ui-components/_textField/TextField';
import styles from '../programs/add/AddProgram.module.css';
import classnames from 'classnames';
import DepartmentDropdown from '../_departmentDropdown/DepartmentDropdown';

const AdminForm = React.memo(({ initialValues, onSubmit }) => {

    const emailValidator = React.useCallback(async (value) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) === false) {
            return "Invalid email address."
        }
    }, [])

    const passwordValidator = React.useCallback(async (value) => {
        if (!value) {
            return "Password required."
        }
    }, [])

    const nameValidator = React.useCallback(async (value) => {
        if (!value) {
            return "Name required."
        }
    }, [])

    return (
        <div className={styles.container}>
            <Form
                initialValues={initialValues}
                onSubmit={onSubmit}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <TextField
                            validator={nameValidator}
                            name="name"
                            type="text"
                            className={classnames(styles.input, styles.inputWithMargin)}
                            placeholder="Admin Name"
                            required
                        />

                        <TextField
                            validator={emailValidator}
                            name="email"
                            type="email"
                            className={classnames(styles.input, styles.inputWithMargin)}
                            placeholder="Admin email"
                            required

                        />

                        <TextField
                            validator={passwordValidator}
                            name="password"
                            type="password"
                            className={classnames(styles.input, styles.inputWithMargin)}
                            placeholder="Admin password"
                            required
                        />

                        <DepartmentDropdown name="department" title="Department" />

                        <button type="submit" className={styles.btn}>
                            Submit
                        </button>
                    </form>
                )} />
        </div>
    )
})

export default AdminForm;