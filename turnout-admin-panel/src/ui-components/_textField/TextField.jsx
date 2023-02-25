import * as React from "react";
import { Field } from "react-final-form";
import { TextFieldContainer } from "./TextFieldContainer";

export const TextField = React.memo(
  ({ name, validator, type, required = false, ...rest }) => {
    return (
      <Field name={name} validate={validator}>
        {({ input: { value, onChange }, meta: { touched, error } }) => (
          <TextFieldContainer
            name={name}
            onChange={onChange}
            required={required}
            type={type}
            error={error}
            touched={touched}
            defaultValue={value}
            {...rest}
          />
        )}
      </Field>
    );
  }
);
