import { Box, Toolbar } from "@mui/material";
import * as React from "react";

export const Content: React.FC<
	React.PropsWithChildren<Record<string, unknown>>
> = React.memo(({ children }) => {
	return (
		<Box component='main' height='100vh' width='100%' sx={{ p: 3 }}>
			<Toolbar />
			{children}
		</Box>
	);
});
