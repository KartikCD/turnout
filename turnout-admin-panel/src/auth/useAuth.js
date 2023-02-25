import restClient from "@/client/restClient";
import { PATHS } from "@/paths";
import { useRouter } from "next/router";
import * as React from "react";
import AuthContext from "@/context/AuthContext";

export default function useAuth() {
  const authContext = React.useContext(AuthContext);
  const router = useRouter();
  const [initialValues, _setInitialValues] = React.useState({
    email: "",
    password: "",
  });
  const [login, setLogin] = React.useState({ isLoading: false, code: 200 });

  React.useEffect(() => {
    (async () => {
      const token = localStorage.getItem("token");
      if (token !== null || token !== undefined) {
        try {
          authContext.setIsLoggedIn(true);
          setLogin((previousLoading) => ({
            ...previousLoading,
            isLoading: true,
          }));
          await restClient().get("/check_status");
          router.push(PATHS.HOME);
        } catch (err) {
          setLogin((previousLoading) => ({
            ...previousLoading,
            isLoading: false,
            code: 401,
          }));
        }
      }
    })();
  }, [setLogin, router]);

  const [error, setError] = React.useState({ status: false, message: "" });

  const emailValidator = React.useCallback(async (value) => {
    if (!value) {
      return "Email required.";
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
      return "Invalid email address.";
    }
  }, []);

  const passwordValidator = React.useCallback(async (value) => {
    if (!value) {
      return "Password required.";
    }
  }, []);

  const onSubmit = React.useCallback(
    async (values) => {
      setError({ status: true, message: "" });
      try {
        // {
        //   data: {
        //     admin: { token },
        //   },
        // }
        const user = await restClient().post("/admin_login", values);
        console.log(user);
        localStorage.setItem("token", user.data.token);
        authContext.setIsLoggedIn(true);
        setError({ status: false, message: "" });
        router.push(PATHS.ADMIN);
      } catch (error) {
        console.log(error);
        setError({ status: true, message: error.response.data.message });
      }
    },
    [setError, router]
  );

  return {
    emailValidator,
    passwordValidator,
    initialValues,
    onSubmit,
    error,
    login,
  };
}
