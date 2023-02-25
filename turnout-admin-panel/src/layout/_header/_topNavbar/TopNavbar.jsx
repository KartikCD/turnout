import * as React from "react";
import styles from "./TopNavbar.module.css";
import { MdLogout } from "react-icons/md";

export const TopNavbar = React.memo(() => {
  return (
    <div className={styles.topNavbar}>
      <div className={styles.topMenu}>
        <div className={styles.logo}>TURNOUT</div>
        <ul>
          <button>
            <MdLogout className={styles.icon} />
          </button>
        </ul>
      </div>
    </div>
  );
});
