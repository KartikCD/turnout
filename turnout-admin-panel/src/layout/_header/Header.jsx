import * as React from "react";
import { SideNavbar } from "./_sideNavbar/SideNavbar";
import { TopNavbar } from "./_topNavbar/TopNavbar";

export const Header = React.memo(() => {
  return (
    <>
      <TopNavbar />
      <SideNavbar />
    </>
  );
});
