import { WithEmptyList, WithError, WithLoading } from "@/util-components";
import { Box, Grid, Typography } from "@mui/material";
import * as React from "react";
import useHome from "./useHome";
import ProgramListItem from "./_programListItem/ProgramListItem";
import styles from "../styles/Home.module.css";

const Home = React.memo(() => {
	const { data, isLoading, isError, error, onProgramClick } = useHome();

	const listItems = React.useMemo(() => {
		return data?.map(program => {
			return (
				<ProgramListItem
					key={program._id}
					program={program}
					onClick={onProgramClick}
				/>
			);
		});
	}, [data, onProgramClick]);

	return (
		<WithLoading loading={isLoading}>
			<WithError isError={isError} message={error?.message}>
				<WithEmptyList
					listLength={data?.length as number}
					message='No programs found.'>
					<Box>
						<Typography
							variant='h4'
							component='h5'
							sx={{
								textAlign: "center",
								width: "100%",
							}}>
							Programs
						</Typography>
						<Box className={styles.program_container}>{listItems}</Box>
					</Box>
				</WithEmptyList>
			</WithError>
		</WithLoading>
	);
});

export default Home;
