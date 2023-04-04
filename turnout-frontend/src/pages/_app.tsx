import * as React from "react";
import "@/styles/globals.css";
import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import useApp from "./useApp";
import { Layout } from "@/application/Layout";
import NextNProgress from "nextjs-progressbar";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }: AppProps) {
	const { theme } = useApp();

	return (
		<>
			<NextNProgress
				color='#000'
				startPosition={0.3}
				stopDelayMs={200}
				height={2}
				showOnShallow
			/>
			<SessionProvider session={pageProps.session}>
				<ThemeProvider theme={theme}>
					<Layout>
						{/* eslint-disable-next-line react/jsx-props-no-spreading */}
						<Component {...pageProps} />
						<ReactQueryDevtools initialIsOpen={false} />
					</Layout>
				</ThemeProvider>
			</SessionProvider>
		</>
	);
}
