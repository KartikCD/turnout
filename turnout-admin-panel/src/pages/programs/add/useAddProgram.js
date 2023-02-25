import restClient from "@/client/restClient";
import { PATHS } from "@/paths";
import { useRouter } from "next/router";
import * as React from "react";

export default function useAddProgram() {
  const router = useRouter();
  const [initialValues, _setInitialValues] = React.useState({
    name: "",
  });

  const [error, setError] = React.useState({
    error: false,
    message: "",
  });

  const onSubmit = React.useCallback(
    async (values) => {
      try {
        const { data, status } = await restClient().post("/program", values);
        if (status === 201) {
          router.push(PATHS.PROGRAM);
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
    onSubmit,
    initialValues,
    error,
  };
}
