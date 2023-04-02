import { Box, Toolbar } from "@mui/material";
import * as React from "react";

export const Content: React.FC<
	React.PropsWithChildren<Record<string, unknown>>
> = React.memo(({ children }) => {
	return (
		<Box
			component='main'
			height='100vh'
			width='100%'
			sx={{
				padding: {
					sm: "16px",
					xs: "16px",
					lg: "24px",
					md: "24px",
				},
			}}>
			<Toolbar />
			{children}
		</Box>
	);
});
