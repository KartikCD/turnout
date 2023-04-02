import { AlertDialog, Severity } from "@/ui-components";
import * as React from "react";

interface Props {
	listLength: number;
	message?: string;
}

export const WithEmptyList: React.FC<React.PropsWithChildren<Props>> =
	React.memo(({ listLength, message = "", children }) => {
		if (listLength === 0) {
			return <AlertDialog severity={Severity.INFO}>{message}</AlertDialog>;
		}
		return <>{children}</>;
	});
