import { useGetNotifications } from "@/queries/notifications/useGetNotifications";
import * as React from "react";

export default function useGetUpdates() {
	const { data, isLoading, isError, error } = useGetNotifications(
		"6428166899c9857e0041be6c"
	);

	return {
		data,
		isLoading,
		isError,
		error,
	};
}
