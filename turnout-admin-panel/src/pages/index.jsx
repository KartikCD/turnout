import * as React from "react";
import styles from "./Home.module.css";
import { AdminListItem } from "@/ui-components/_item/AdminListItem";
import useHome from "./useHome";
import { Auth } from "@/auth/Auth";
import AuthContext from "@/context/AuthContext";

const Home = React.memo(() => {
  const { data, errors, onAddClick, onClick } = useHome();
  const authContext = React.useContext(AuthContext);
  if (!authContext.isLoggedIn) {
    return <Auth />;
  }
  const listAdmins = React.useMemo(() => {
    return data?.data?.admins?.map((admin) => {
      return (
        <AdminListItem key={admin._id} admin={admin} onClick={onAddClick} />
      );
    });
  }, [data, onAddClick]);

  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <h3>Listing Admins</h3>
        <button type="button" className={styles.button} onClick={onClick}>
          Create Admin
        </button>
      </div>
      <div className={styles.listContainer}>{listAdmins}</div>
      {errors.error === true ? (
        <CustomAlert alertType={AlertTypes.DANGER} message={error.message} />
      ) : (
        <></>
      )}
    </div>
  );
});

export default Home;
