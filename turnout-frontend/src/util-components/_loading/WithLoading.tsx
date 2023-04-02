import { Spinner } from "@/ui-components";
import * as React from "react";

interface Props {
	loading: boolean;
}

export const WithLoading: React.FC<React.PropsWithChildren<Props>> = React.memo(
	({ loading = false, children }) => {
		if (loading) {
			return <Spinner />;
		}
		return <>{children}</>;
	}
);
