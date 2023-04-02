import * as React from "react";
import { useGetPrograms } from "@/queries";
import { useRouter } from "next/router";
import { PATHS } from "@/paths";

export default function useHome() {
	const { data, isLoading, isError, error } = useGetPrograms();
	const router = useRouter();

	const onProgramClick = React.useCallback(
		(id: string) => {
			router.push(`${PATHS.EVENTS}/${id}`);
		},
		[router]
	);

	return {
		data,
		isLoading,
		error,
		isError,
		onProgramClick,
	};
}
