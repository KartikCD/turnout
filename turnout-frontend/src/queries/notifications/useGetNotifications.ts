import { Notification } from "@/models";
import httpCommon from "@/util/http-common";
import { useQuery } from "@tanstack/react-query";

const getNotifications = async (id: string) => {
	const response = await httpCommon.get(`/notifications/${id}`);
	if (response.status === 200) {
		return response.data.notifications as Array<Notification>;
	} else {
		throw new Error(response.data.message as string);
	}
};

export const useGetNotifications = (id: string) => {
	return useQuery<Array<Notification>, Error>(
		["notifications"],
		() => getNotifications(id),
		{
			enabled: id !== null || id !== undefined || id !== "" ? true : false,
		}
	);
};
