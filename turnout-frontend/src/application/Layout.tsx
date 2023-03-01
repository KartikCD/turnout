import * as React from "react";
import { Box } from "@mui/material";
import { QueryClientProvider } from "react-query";
import { Header } from "./_header/Header";
import { Content } from "./_content/Content";
import useLayout from "./useLayout";
import { LayoutContextProvider } from "./_context/LayoutContextProvider";
import { queryCache } from "./_queryCache/queryCache";

export const Layout: React.FC<
	React.PropsWithChildren<Record<string, unknown>>
> = React.memo(({ children }) => {
	const { initialState } = useLayout();
	const client = queryCache.cache;

	return (
		<LayoutContextProvider initialState={initialState}>
			<QueryClientProvider client={client}>
				<Box sx={{ display: "flex" }}>
					<Header />
					<Content>{children}</Content>
				</Box>
			</QueryClientProvider>
		</LayoutContextProvider>
	);
});
