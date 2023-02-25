import * as React from "react";
import useProgram from "./useProgram";
import styles from "../Home.module.css";
import ProgramListItem from "./_item/ProgramListItem";

const ListPrograms = React.memo(() => {
  const { data, errors, onAddClick, onClick } = useProgram();

  const listItems = React.useMemo(() => {
    return data?.data?.programs?.map((program) => {
      return (
        <ProgramListItem
          key={program._id}
          program={program}
          onClick={onAddClick}
        />
      );
    });
  });

  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <h3>Listing Programs</h3>
        <button type="button" className={styles.button} onClick={onClick}>
          Create Program
        </button>
      </div>
      <div className={styles.listContainer}>{listItems}</div>
      {errors.error === true ? (
        <CustomAlert alertType={AlertTypes.DANGER} message={error.message} />
      ) : (
        <></>
      )}
    </div>
  );
});

export default ListPrograms;
