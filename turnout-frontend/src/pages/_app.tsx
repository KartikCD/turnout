import * as React from "react";
import "@/styles/globals.css";
import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import useApp from "./useApp";
import { Layout } from "@/application/Layout";
import { ReactQueryDevtools } from "react-query-devtools";
export default function App({ Component, pageProps }: AppProps) {
	const { theme } = useApp();

	return (
		<ThemeProvider theme={theme}>
			<Layout>
				{/* eslint-disable-next-line react/jsx-props-no-spreading */}
				<Component {...pageProps} />
				{/* <ReactQueryDevtools initialIsOpen={false} /> */}
			</Layout>
		</ThemeProvider>
	);
}
