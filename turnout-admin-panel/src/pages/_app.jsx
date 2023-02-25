import { Application } from "@/layout/Application";
import * as React from "react";
import "../../styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Auth } from "@/auth/Auth";

function MyApp({ Component, pageProps }) {
  return (
    // <Auth>
    <Application>
      <Component {...pageProps} />
    </Application>
    // </Auth>
  );
}

export default MyApp;
