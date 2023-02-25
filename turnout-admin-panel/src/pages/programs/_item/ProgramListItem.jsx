import * as React from "react";
import styles from "./ProgramListItem.module.css";
import { FiEdit } from "react-icons/fi";

const ProgramListItem = React.memo(({ program: { _id, name }, onClick }) => {
  const onButtonClick = React.useCallback(() => {
    onClick(_id);
  }, [onClick, _id]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.text}>Name: {name}</p>
        <button className={styles.button} onClick={onButtonClick}>
          <FiEdit className={styles.icon} />
        </button>
      </div>
    </div>
  );
});

export default ProgramListItem;
