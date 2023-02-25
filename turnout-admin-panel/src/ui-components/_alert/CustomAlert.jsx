import * as React from "react";
import Alert from "react-bootstrap/Alert";

export const AlertTypes = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  SUCCESS: "success",
  DANGER: "danger",
  WARNING: "warning",
  INFO: "info",
};

export const CustomAlert = React.memo(({ alertType, message }) => {
  return (
    <Alert
      key={alertType}
      variant={alertType}
      style={{ marginTop: "16px", textAlign: "center" }}
    >
      {message}
    </Alert>
  );
});
