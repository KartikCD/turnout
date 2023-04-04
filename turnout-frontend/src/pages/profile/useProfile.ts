import { signOut } from "next-auth/react";
import { PATHS } from "@/paths";
import { useGetStudent } from "@/queries/student/useGetStudent";
import { useRouter } from "next/router";
import * as React from "react";

export default function useProfile(studentId: string) {
	const { data, isLoading, isError, error } = useGetStudent(studentId);
	const router = useRouter();

	const onUpdatePasswordClick = React.useCallback(() => {
		router.push(`${PATHS.CHANGE_PASSWORD}`);
	}, [router, data]);

	const onLogout = React.useCallback(() => {
		signOut({ redirect: false });
	}, [signOut]);

	return {
		data,
		isLoading,
		isError,
		error,
		onUpdatePasswordClick,
		onLogout,
	};
}
