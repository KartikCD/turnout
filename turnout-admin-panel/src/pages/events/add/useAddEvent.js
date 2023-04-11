import { useRouter } from "next/router";
import * as React from "react";
import restClient from "@/client/restClient";
import { PATHS } from "@/paths";
import axios from "axios";

export default function useAddEvent() {
  const [initialValues, setInitialValues] = React.useState({
    name: "",
    programId: "",
    venue: "",
    description: "",
    reportingTime: "",
    note: "",
    contactDetails: "",
    poster: "",
  });
  const [programData, setProgramData] = React.useState(undefined);
  const [programError, setProgramError] = React.useState({
    error: false,
    message: "",
  });

  const [error, setError] = React.useState({
    error: false,
    message: "",
  });
  const router = useRouter();

  const fetchPrograms = React.useCallback(async () => {
    try {
      const data = await restClient().get("/programs");
      if (data?.data.programs?.length > 0) {
        setProgramData(data);
        setInitialValues((previousInitialValues) => ({
          ...previousInitialValues,
          programId: data?.data?.programs[0]._id,
        }));
      }
    } catch (err) {
      setProgramError({ error: true, message: "No programs found." });
    } finally {
      setProgramError({ error: false, message: "" });
    }
  }, [setProgramData, setProgramError, setInitialValues]);

  React.useEffect(() => {
    fetchPrograms();
  }, [fetchPrograms]);

  const onSubmit = React.useCallback(
    async (values, files) => {
      try {
        const eventData = {
          ...values,
          date: new Date(values.date),
        };
        const { data, status } = await restClient().post("/event", eventData);
        console.log(data);
        if (status === 201) {
          // router.push(PATHS.EVENT);
          if (files !== undefined) {
            let formData = new FormData();
            formData.append("files", files);
            const { data: uploadData, status: uploadStatus } = await axios.post(
              `http://localhost:5050/uploadImage/${data.event._id}`,
              formData,
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              }
            );

            if (uploadStatus === 200) {
              router.push(PATHS.EVENT);
            } else {
              setError({ error: true, message: uploadData.message });
            }
          }
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
    programData,
    programError,
  };
}
