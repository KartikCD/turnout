import * as React from "react";
import { Box } from "@mui/material";
import { QueryClientProvider } from "@tanstack/react-query";
import { Header } from "./_header/Header";
import { Content } from "./_content/Content";
import useLayout from "./useLayout";
import { LayoutContextProvider } from "./_context/LayoutContextProvider";
import { queryCache } from "./_queryCache/queryCache";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export const Layout: React.FC<
	React.PropsWithChildren<Record<string, unknown>>
> = React.memo(({ children }) => {
	const { initialState } = useLayout();
	const client = queryCache.cache;
	const { status, data } = useSession();
	const router = useRouter();

	console.log(status, data);

	React.useEffect(() => {
		if (status === "unauthenticated") {
			router.push("/auth/signin");
		}
	}, [status, router]);

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
