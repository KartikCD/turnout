import { Application } from "@/layout/Application";
import * as React from "react";
import "../../styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthContext from "@/context/AuthContext";
import AuthProvider from "@/provider/AuthProvider";

function MyApp({ Component, pageProps }) {
  return (
    // <Auth>
    <AuthProvider>
      <Application>
        <Component {...pageProps} />
      </Application>
    </AuthProvider>

    // </Auth>
  );
}

export default MyApp;
