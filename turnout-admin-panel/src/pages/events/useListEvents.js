import restClient from "@/client/restClient";
import { PATHS } from "@/paths";
import { useRouter } from "next/router";
import * as React from "react";

export default function useListEvents() {
  const [programs, setPrograms] = React.useState(undefined);
  const [programErrors, setProgramErrors] = React.useState({
    error: false,
    message: "",
  });
  const [program, setProgram] = React.useState("");
  const router = useRouter();
  const [events, setEvents] = React.useState(undefined);
  const [errors, setErrors] = React.useState({ error: false, message: "" });

  const fetchPrograms = React.useCallback(async () => {
    try {
      const programsData = await restClient().get("/programs");
      setPrograms(programsData);
      if (programsData?.data?.programs?.length !== 0) {
        setProgram(programsData?.data?.programs[0]._id);
      }
    } catch (err) {
      setProgramErrors({ error: true, message: "No programs found." });
    } finally {
      setProgramErrors({ error: false, message: "" });
    }
  }, [setProgramErrors, setPrograms, setProgram]);

  const fetchEvents = React.useCallback(async () => {
    try {
      if (program !== "") {
        const eventsData = await restClient().get("/events", {
          params: {
            programId: program,
          },
        });
        setEvents(eventsData);
      }
    } catch (err) {
      setErrors({ error: true, message: "No events found." });
    } finally {
      setErrors({ error: false, message: "" });
    }
  }, [program, setEvents, setErrors]);

  React.useEffect(() => {
    fetchPrograms();
  }, []);

  React.useEffect(() => {
    if (program !== "") {
      fetchEvents();
    }
  }, [program, fetchEvents]);

  const onDropdownChange = React.useCallback(
    (id) => {
      setProgram(id);
    },
    [setProgram]
  );

  const onAddEventClick = React.useCallback(() => {
    router.push(`${PATHS.ADD_EVENT}`);
  }, [router]);

  const onClick = React.useCallback((id) => {
    console.log(id);
  }, []);

  return {
    programs,
    programErrors,
    program,
    onDropdownChange,
    onAddEventClick,
    events,
    errors,
    onClick,
  };
}
