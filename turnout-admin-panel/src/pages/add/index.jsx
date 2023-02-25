import * as React from 'react';
import styles from '../programs/add/AddProgram.module.css';
import useAddAdmin from './useAddAdmin';
import AdminForm from '../_form/AdminForm';

const AddAdmin = React.memo(() => {
    const { initialValues, onSubmit } = useAddAdmin();

    return (
        <div className={styles.container}>
            <h3>Add Admin</h3>
            <div className={styles.formContainer}>
                <AdminForm
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                />
            </div>
        </div>
    )
})

export default AddAdmin;