import { useGetNotifications } from "@/queries/notifications/useGetNotifications";

export default function useGetUpdates(studentId: string) {
	const { data, isLoading, isError, error } = useGetNotifications(studentId);

	return {
		data,
		isLoading,
		isError,
		error,
	};
}
