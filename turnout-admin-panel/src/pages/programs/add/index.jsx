import * as React from "react";
import styles from "./AddProgram.module.css";
import useAddProgram from "./useAddProgram";
import ProgramForm from "../_form/ProgramForm";

const AddProgram = React.memo(() => {
  const { initialValues, onSubmit } = useAddProgram();

  return (
    <div className={styles.container}>
      <h3>Add Program</h3>
      <div className={styles.formContainer}>
        <ProgramForm
          initialValues={initialValues}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
});

export default AddProgram;
