import * as React from "react";
import styles from "./Application.module.css";
import { Header } from "./_header/Header";

export const Application = React.memo(({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.mainContainer}>{children}</div>
    </div>
  );
});
