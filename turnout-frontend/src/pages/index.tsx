import { WithLoading } from "@/util-components";
import { Box, Typography } from "@mui/material";
import * as React from "react";

const Home = React.memo(() => {
	const [loading, setLoading] = React.useState(true);

	React.useEffect(() => {
		setTimeout(() => setLoading(false), 5000);
	}, []);

	return (
		<WithLoading loading={loading}>
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
			</Box>
		</WithLoading>
	);
});

export default Home;
