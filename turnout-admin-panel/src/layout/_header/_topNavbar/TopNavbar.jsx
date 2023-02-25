import * as React from "react";
import styles from "./TopNavbar.module.css";
import { MdLogout } from "react-icons/md";
import { useRouter } from "next/router";

export const TopNavbar = React.memo(() => {
  const navigator = useRouter();
  return (
    <div className={styles.topNavbar}>
      <div className={styles.topMenu}>
        <div className={styles.logo}>TURNOUT</div>
        <ul>
          <button>
            <MdLogout
              onClick={() => {
                console.log("Hello");
                localStorage.clear();
                navigator.reload();
              }}
              className={styles.icon}
            />
          </button>
        </ul>
      </div>
    </div>
  );
});
