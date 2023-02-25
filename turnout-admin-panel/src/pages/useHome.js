import restClient from "@/client/restClient";
import { PATHS } from "@/paths";
import { useRouter } from "next/router";
import * as React from "react";

export default function useHome() {
  const [data, setData] = React.useState(undefined);
  const [errors, setErrors] = React.useState({ error: false, message: "" });
  const router = useRouter();

  const fetchAdmins = React.useCallback(async () => {
    try {
      const adminsData = await restClient().get("/admins");
      setData(adminsData);
    } catch (err) {
      setErrors({ error: true, message: "No admins found." });
    } finally {
      setErrors({ error: false, message: "" });
    }
  }, [setData, setErrors]);

  React.useEffect(() => {
    fetchAdmins();
  }, [fetchAdmins]);

  const onAddClick = React.useCallback((id) => {
    console.log(id);
  }, []);

  const onClick = React.useCallback(() => {
    router.push(PATHS.ADD_ADMIN);
  }, [router]);

  return {
    data,
    errors,
    onAddClick,
    onClick,
  };
}
