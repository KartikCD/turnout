import { AlertTypes, CustomAlert } from "@/ui-components";
import * as React from "react";
import { Form } from "react-final-form";
import styles from "./Auth.module.css";
import useAuth from "./useAuth";
import { TextFieldContainer } from "./_input/TextFieldContainer";

export const Auth = React.memo(({ children }) => {
  const {
    initialValues,
    emailValidator,
    passwordValidator,
    onSubmit,
    error,
    login,
  } = useAuth();

  return (
    <>
      {login.isLoading === false ? (
        <div className={styles.wrapper}>
          <Form
            initialValues={initialValues}
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
              <form className={styles.formSignIn} onSubmit={handleSubmit}>
                <h2 className={styles.heading}>Please Login</h2>

                <TextFieldContainer
                  validator={emailValidator}
                  name="email"
                  type="email"
                  placeholder="Email"
                />
                <TextFieldContainer
                  validator={passwordValidator}
                  name="password"
                  type="password"
                  placeholder="Password"
                />
                <button type="submit" className={styles.btn}>
                  Login
                </button>
              </form>
            )}
          />
          {error.status === true ? (
            <CustomAlert
              alertType={AlertTypes.DANGER}
              message={error.message}
            />
          ) : (
            <></>
          )}
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );
});
