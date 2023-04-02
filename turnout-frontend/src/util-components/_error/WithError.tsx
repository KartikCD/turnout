import { AlertDialog, Severity } from "@/ui-components";
import * as React from "react";

interface Props {
	isError?: boolean;
	message?: string;
}

export const WithError: React.FC<React.PropsWithChildren<Props>> = React.memo(
	({ isError = false, message = "", children }) => {
		if (isError) {
			return <AlertDialog severity={Severity.ERROR}>{message}</AlertDialog>;
		}
		return <>{children}</>;
	}
);
