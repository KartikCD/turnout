import { Backdrop, CircularProgress } from "@mui/material";
import * as React from "react";

export const Spinner = React.memo(() => {
	return (
		<Backdrop sx={{ zIndex: theme => theme.zIndex.drawer + 1 }} open={true}>
			<CircularProgress size='64px' thickness={6.4} />
		</Backdrop>
	);
});
