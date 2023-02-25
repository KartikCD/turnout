import restClient from "@/client/restClient";
import { DEPARTMENTS } from "@/constants";
import { PATHS } from "@/paths";
import { useRouter } from "next/router";
import * as React from "react";

export default function useAddAdmin() {
  const [initialValues, _setInitialValues] = React.useState({
    name: "",
    email: "",
    password: "",
    department: DEPARTMENTS[2],
  });

  const [error, setError] = React.useState({
    error: false,
    message: "",
  });
  const router = useRouter();

  const onSubmit = React.useCallback(
    async (values) => {
      try {
        const { data, status } = await restClient().post("/admin", values);
        if (status === 201) {
          router.push(PATHS.HOME);
        } else {
          setError({ error: true, message: data.message });
        }
      } catch (err) {
        setError({ error: true, message: err.message });
      } finally {
        setError({ error: false, message: "" });
      }
    },
    [setError, router]
  );

  return {
    initialValues,
    onSubmit,
    error,
  };
}
