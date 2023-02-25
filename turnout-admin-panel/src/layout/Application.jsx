import * as React from "react";
import styles from "./Application.module.css";
import { Header } from "./_header/Header";
import AuthContext from "@/context/AuthContext";

export const Application = React.memo(({ children }) => {
  const authContext = React.useContext(AuthContext);
  if (!authContext.isLoggedIn) {
    return <div>{children}</div>;
  }
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.mainContainer}>{children}</div>
    </div>
  );
});
