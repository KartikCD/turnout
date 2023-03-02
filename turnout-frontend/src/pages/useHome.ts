import * as React from "react";
import { useGetPrograms } from "@/queries";

export default function useHome() {
	const { data, isLoading, isError, error } = useGetPrograms();

	const onProgramClick = React.useCallback((id: string) => {
		console.log(id);
	}, []);

	return {
		data,
		isLoading,
		error,
		isError,
		onProgramClick,
	};
}
