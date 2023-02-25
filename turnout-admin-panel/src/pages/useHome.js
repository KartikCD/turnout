import restClient from "@/client/restClient";
import * as React from "react";

export default function useHome() {
  const [data, setData] = React.useState(undefined);
  const [errors, setErrors] = React.useState({ error: false, message: "" });

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

  return {
    data,
    errors,
    onAddClick,
  };
}
