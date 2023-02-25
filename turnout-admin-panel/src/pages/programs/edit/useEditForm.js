import restClient from "@/client/restClient";
import { PATHS } from "@/paths";
import { useRouter } from "next/router";
import * as React from "react";

export default function useEditForm(id) {
  const [data, setData] = React.useState(undefined);
  const [errors, setErrors] = React.useState({ error: false, message: "" });
  const [loading, setLoading] = React.useState(true);
  const router = useRouter();

  const fetchProgram = React.useCallback(
    async (programId) => {
      try {
        setLoading(true);
        const { data, status } = await restClient().get(
          `/program/${programId}`
        );
        console.log(data);
        if (status === 500) {
          setErrors({ error: true, message: data.message });
        }
        setData(data);
      } catch (err) {
        setErrors({ error: true, message: err.message });
      } finally {
        setLoading(false);
        setErrors({ error: false, message: "" });
      }
    },
    [setData, setErrors, setLoading]
  );

  React.useEffect(() => {
    if (id !== undefined) {
      fetchProgram(id);
    } else {
      setLoading(true);
    }
  }, [fetchProgram, id, setLoading]);

  const onSubmit = React.useCallback(
    async (values) => {
      try {
        const { status, data } = await restClient().put(
          `/program/${values._id}`,
          values
        );
        if (status === 200) {
          router.push(PATHS.PROGRAM);
        } else {
          setErrors({ error: true, message: data.message });
        }
      } catch (err) {
        setErrors({ error: true, message: err.message });
      } finally {
        setErrors({ error: false, message: "" });
      }
    },
    [setErrors, router]
  );

  return {
    data,
    errors,
    loading,
    onSubmit,
  };
}
