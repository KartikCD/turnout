import * as React from "react";
import styles from "../Home.module.css";
import useListStudent from "./useListStudent";
import { StudentListItem } from "./_item/StudentListItem";

const ListStudents = React.memo(() => {
  const { data, errors } = useListStudent();

  const listItems = React.useMemo(() => {
    return data?.data?.students?.map((student) => {
      return <StudentListItem student={student} />;
    });
  }, [data]);

  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <h3>Listing Students</h3>
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

export default ListStudents;
