import useId from '@/utils/useId'
import * as React from 'react'
import useEditForm from './useEditForm';
import { WithLoading } from '@/util-components/WithLoading';
import { AlertTypes, CustomAlert } from '@/ui-components';
import styles from '../add/AddProgram.module.css';
import ProgramForm from '../_form/ProgramForm';

const EditProgram = React.memo(() => {
    const id = useId("id");
    console.log(id);
    const { data, loading, errors, onSubmit } = useEditForm(id);
    console.log(data, loading, errors)
    return (
        <WithLoading loading={loading}>
            <>
                <div className={styles.container}>
                    <div className={styles.headingContainer}>
                        <h3>Edit Program</h3>
                        <div className={styles.formContainer}>
                            <ProgramForm
                                initialValues={data?.program}
                                onSubmit={onSubmit} />
                        </div>
                    </div>
                </div>
                {errors.error === true ? (
                    <CustomAlert alertType={AlertTypes.DANGER} message={error.message} />
                ) : (<></>)}
            </>
        </WithLoading>
    )
});

export default EditProgram;