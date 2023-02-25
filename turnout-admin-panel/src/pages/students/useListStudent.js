import restClient from "@/client/restClient";
import * as React from "react";

export default function useListStudent() {
  const [data, setData] = React.useState(undefined);
  const [errors, setErrors] = React.useState({ error: false, message: "" });

  const fetchStudents = React.useCallback(async () => {
    try {
      const studentsData = await restClient().get("/students");
      setData(studentsData);
    } catch (err) {
      setErrors({ error: true, message: "No students found." });
    } finally {
      setErrors({ error: false, message: "" });
    }
  }, [setData, setErrors]);

  React.useEffect(() => {
    fetchStudents();
  }, [fetchStudents]);

  return {
    data,
    errors,
  };
}
