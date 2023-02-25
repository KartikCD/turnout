import * as React from "react";

export const TextFieldContainer = React.memo(
  ({ name, type, required, error, touched, ...rest }) => {
    return (
      <>
        <label htmlFor={name}></label>
        <input
          type={type}
          name={name}
          id={name}
          required={required}
          {...rest}
        />
        {error && touched && <span>{error}</span>}
      </>
    );
  }
);
