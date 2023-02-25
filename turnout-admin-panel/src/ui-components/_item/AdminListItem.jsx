import * as React from "react";
import styles from "./AdminListItem.module.css";
import { FiEdit } from "react-icons/fi";

export const AdminListItem = React.memo(
  ({ admin: { _id, name, email, department }, onClick }) => {
    const onButtonClick = React.useCallback(() => {
      onClick(_id);
    }, [onClick, _id]);

    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <p className={styles.text}>Name: {name}</p>
            <p className={styles.text}>Email: {email}</p>
            <p className={styles.text}>Department: {department}</p>
          </div>
          <button className={styles.button} onClick={onButtonClick}>
            <FiEdit className={styles.icon} />
          </button>
        </div>
      </div>
    );
  }
);
