import * as React from "react";
import styles from "./SideNavbar.module.css";
import { ListItem } from "./_listItem/ListItem";
import { PATHS } from "../../../paths";

const titles = [
  { title: "Admins", path: PATHS.HOME },
  { title: "Students", path: PATHS.STUDENT },
  { title: "Events", path: PATHS.EVENT },
  { title: "Programs", path: PATHS.PROGRAM },
  { title: "Profile", path: PATHS.ADMIN },
];

export const SideNavbar = React.memo(() => {
  const listItems = React.useMemo(() => {
    return titles.map(({ title, path }) => {
      return <ListItem key={title} title={title} path={path} />;
    });
  }, []);

  return (
    <div className={styles.sidebar}>
      <ul className={styles.ulListItem}>{listItems}</ul>
    </div>
  );
});
