import { PATHS } from "@/paths";
import { useGetStudent } from "@/queries/student/useGetStudent";
import { useRouter } from "next/router";
import * as React from "react";

export default function useProfile() {
	const { data, isLoading, isError, error } = useGetStudent(
		"6429ac534459a9c3d98b3eb8"
	);
	const router = useRouter();

	const onUpdatePasswordClick = React.useCallback(() => {
		router.push(`${PATHS.CHANGE_PASSWORD}/${data?._id as unknown as string}`);
	}, [router, data]);

	return {
		data,
		isLoading,
		isError,
		error,
		onUpdatePasswordClick,
	};
}
