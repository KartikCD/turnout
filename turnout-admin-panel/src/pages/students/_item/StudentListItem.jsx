import * as React from "react";
import styles from "./StudentListItem.module.css";

export const StudentListItem = React.memo(
  ({ student: { name, registrationId, email, department } }) => {
    return (
      <div className={styles.container}>
        <p className={styles.text}>Name: {name}</p>
        <p className={styles.text}>Registration Id: {registrationId}</p>
        <p className={styles.text}>Email: {email}</p>
        <p className={styles.text}>Department: {department}</p>
      </div>
    );
  }
);
