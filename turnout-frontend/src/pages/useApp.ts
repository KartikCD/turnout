import { createTheme } from "@mui/material";

export default function useApp() {
	const theme = createTheme({
		palette: {
			primary: {
				main: "#FFE600",
				contrastText: "#000000",
			},
			text: {
				primary: "#000000",
			},
		},
		typography: {
			htmlFontSize: 16,
			fontFamily: "Inter",
			fontSize: 14,
		},
	});

	return {
		theme,
	};
}
