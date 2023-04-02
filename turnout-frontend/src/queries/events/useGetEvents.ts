import { queryCache } from "@/application/_queryCache/queryCache";
import { Event } from "@/models/_events/Event";
import httpCommon from "@/util/http-common";
import { useQuery } from "@tanstack/react-query";

const getEvents = async (programId: string) => {
	const response = await httpCommon.get("/events", {
		params: {
			programId: programId,
		},
	});

	if (response.status === 200) {
		return response.data.events as Array<Event>;
	} else {
		throw new Error(response.data.message as string);
	}
};

export const useGetEvents = (programId: string) => {
	return useQuery<Array<Event>, Error>(["events"], () => getEvents(programId), {
		initialData: () => {
			const result = queryCache.read<Event>(["events"]);
			return result;
		},
		enabled:
			programId !== null || programId !== undefined || programId !== ""
				? true
				: false,
	});
};
