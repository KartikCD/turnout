import * as React from "react";
import styles from "./TextField.module.css";
import classnames from 'classnames';

export const TextField = React.memo(
  ({ name, type, placeholder, required = false, error, touched, className, ...rest }) => {
    return (
      <>
        <label htmlFor={name}></label>
        <input
          className={classnames(styles.inputField, className)}
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
