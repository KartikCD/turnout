import * as React from "react";
import styles from "./ListItem.module.css";
import Link from "next/link";

export const ListItem = React.memo(({ path, title }) => {
  return (
    <li className={styles.listItem}>
      <Link href={path}>
        <span className={styles.title}>{title}</span>
      </Link>
    </li>
  );
});
