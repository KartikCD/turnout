import * as React from "react";
import styles from "./TextField.module.css";

export const TextField = React.memo(
  ({ name, type, placeholder, required = false, error, touched, ...rest }) => {
    return (
      <>
        <label htmlFor={name}></label>
        <input
          className={styles.inputField}
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          required={required}
          {...rest}
        />
        {error && touched && <span>{error}</span>}
      </>
    );
  }
);
