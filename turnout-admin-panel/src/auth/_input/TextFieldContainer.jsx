import * as React from "react";
import { Field } from "react-final-form";
import { TextField } from "./TextField";

export const TextFieldContainer = React.memo(
  ({ name, validator, type, placeholder, required = false, className }) => {
    return (
      <Field name={name} validate={validator}>
        {({ input: { value, onChange }, meta: { touched, error } }) => (
          <TextField
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            type={type}
            error={error}
            touched={touched}
            defaultValue={value}
            className={className}
          />
        )}
      </Field>
    );
  }
);
