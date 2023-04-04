import { Box, Typography } from "@mui/material";
import * as React from "react";
import useGetUpdates from "./useGetUpdates";
import { WithEmptyList, WithError, WithLoading } from "@/util-components";
import styles from "./Updates.module.css";
import UpdateListItem from "./_updateListItem/UpdateListItem";
import { getLoginUserId } from "@/util/getLoginUserId";

const Updates = React.memo(() => {
	const studentId = getLoginUserId();
	const { data, isLoading, isError, error } = useGetUpdates(studentId);

	const listItems = React.useMemo(() => {
		return data?.map(notification => {
			return <UpdateListItem notification={notification} />;
		});
	}, [data]);

	return (
		<WithLoading loading={isLoading}>
			<WithError isError={isError} message={error?.message}>
				<WithEmptyList
					listLength={data?.length as number}
					message='No notifications found.'>
					<Box>
						<Typography
							variant='h4'
							component='h5'
							sx={{
								textAlign: "center",
								width: "100%",
							}}>
							Updates
						</Typography>
						<div className={styles.divContainer}>{listItems}</div>
					</Box>
				</WithEmptyList>
			</WithError>
		</WithLoading>
	);
});

export default Updates;
