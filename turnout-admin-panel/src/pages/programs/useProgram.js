import restClient from "@/client/restClient";
import { PATHS } from "@/paths";
import { useRouter } from "next/router";
import * as React from "react";

export default function useProgram() {
  const [data, setData] = React.useState(undefined);
  const [errors, setErrors] = React.useState({ error: false, message: "" });
  const router = useRouter();

  const fetchPrograms = React.useCallback(async () => {
    try {
      const programsData = await restClient().get("/programs");
      setData(programsData);
    } catch (err) {
      setErrors({ error: true, message: "No programs found." });
    } finally {
      setErrors({ error: false, message: "" });
    }
  }, [setData, setErrors]);

  React.useEffect(() => {
    fetchPrograms();
  }, [fetchPrograms]);

  const onAddClick = React.useCallback(
    (id) => {
      router.push(`${PATHS.EDIT_PROGRAM}/${id}`);
    },
    [router]
  );

  const onClick = React.useCallback(() => {
    router.push(PATHS.ADD_PROGRAM);
  }, [router]);

  return {
    data,
    errors,
    onAddClick,
    onClick,
  };
}
