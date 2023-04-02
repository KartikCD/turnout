import { Alert, Snackbar } from "@mui/material";
import * as React from "react";

export enum Severity {
	SUCCESS = "success",
	ERROR = "error",
	INFO = "info",
	WARNING = "warning",
}

interface Props {
	severity: Severity;
}

export const AlertDialog: React.FC<React.PropsWithChildren<Props>> = React.memo(
	({ children, severity }) => {
		const [open, setOpen] = React.useState<boolean>(true);

		const onClose = React.useCallback(
			(_event?: React.SyntheticEvent | Event, reason?: string) => {
				if (reason === "clickaway") {
					return;
				}
				setOpen(false);
			},
			[setOpen]
		);

		return (
			<Snackbar open={open} autoHideDuration={5000} onClose={onClose}>
				<Alert onClose={onClose} severity={severity} sx={{ width: "100%" }}>
					{children}
				</Alert>
			</Snackbar>
		);
	}
);
