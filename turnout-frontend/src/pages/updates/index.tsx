import { Box, Typography } from "@mui/material";
import * as React from "react";
import useGetUpdates from "./useGetUpdates";
import { WithEmptyList, WithError, WithLoading } from "@/util-components";
import styles from "./Updates.module.css";
import UpdateListItem from "./_updateListItem/UpdateListItem";

const Updates = React.memo(() => {
	const { data, isLoading, isError, error } = useGetUpdates();

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
