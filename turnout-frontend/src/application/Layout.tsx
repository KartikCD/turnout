import * as React from "react";
import { Box } from "@mui/material";
import { QueryClientProvider } from "@tanstack/react-query";
import { Header } from "./_header/Header";
import { Content } from "./_content/Content";
import useLayout from "./useLayout";
import { LayoutContextProvider } from "./_context/LayoutContextProvider";
import { queryCache } from "./_queryCache/queryCache";
import { useSession } from "next-auth/react";
import { Login } from "@/auth/_login/Login";
import { WithLoading } from "@/util-components";

export const Layout: React.FC<
	React.PropsWithChildren<Record<string, unknown>>
> = React.memo(({ children }) => {
	const { initialState } = useLayout();
	const client = queryCache.cache;
	const { status } = useSession();

	return (
		<>
			<WithLoading loading={status === "loading" ? true : false}>
				<LayoutContextProvider initialState={initialState}>
					<QueryClientProvider client={client}>
						<Box sx={{ display: "flex" }}>
							{status === "unauthenticated" ? (
								<>
									<Header />
									<Content>
										<Login />
									</Content>
								</>
							) : (
								<>
									<Header />
									<Content>{children}</Content>
								</>
							)}
						</Box>
					</QueryClientProvider>
				</LayoutContextProvider>
			</WithLoading>
		</>
	);
});
