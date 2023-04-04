import * as React from "react";
import useProgramId from "./useProgramId";
import useEventsList from "./useEventsList";
import { WithEmptyList, WithError, WithLoading } from "@/util-components";
import { Box, Typography } from "@mui/material";
import styles from "./Events.module.css";
import EventListItem from "./_eventListItem/EventListItem";
import { AlertDialog, Severity } from "@/ui-components";
import { getLoginUserId } from "@/util/getLoginUserId";

const EventsList = React.memo(() => {
	const id = useProgramId();
	const studentId = getLoginUserId();
	const { data, isLoading, error, isError, onRegisterClick, registrationData } =
		useEventsList(id);
	const listItems = React.useMemo(() => {
		return data?.map(event => {
			return (
				<EventListItem
					studentId={studentId}
					key={event._id}
					event={event}
					onClick={onRegisterClick}
				/>
			);
		});
	}, [data, onRegisterClick]);

	return (
		<>
			<WithLoading loading={isLoading}>
				<WithError isError={isError} message={error?.message}>
					<WithEmptyList
						listLength={data?.length as number}
						message='No events found.'>
						<Box>
							<Typography
								variant='h4'
								component='h5'
								sx={{
									textAlign: "center",
									width: "100%",
								}}>
								Events
							</Typography>
							<Box className={styles.program_container}>{listItems}</Box>
						</Box>
					</WithEmptyList>
				</WithError>
			</WithLoading>
			<WithLoading loading={registrationData.addIsLoading}>
				<WithError
					isError={registrationData.addIsError}
					message={registrationData.addError as string}>
					{registrationData.addData === null ||
					registrationData.addData === undefined ? (
						<></>
					) : (
						<>
							<AlertDialog severity={Severity.SUCCESS}>
								Registration successful for {registrationData.addData.eventName} event.
							</AlertDialog>
						</>
					)}
				</WithError>
			</WithLoading>
		</>
	);
});

export default EventsList;
