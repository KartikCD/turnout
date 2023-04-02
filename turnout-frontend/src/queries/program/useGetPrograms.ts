import { queryCache } from "@/application/_queryCache/queryCache";
import { Program } from "@/models";
import httpCommon from "@/util/http-common";
import { useQuery } from "@tanstack/react-query";

const getPrograms = async () => {
	const response = await httpCommon.get("/programs");
	if (response.status === 200) {
		return response.data.programs as Array<Program>;
	} else {
		throw new Error(response.data.message as string);
	}
};

export const useGetPrograms = () => {
	return useQuery<Array<Program>, Error>(["programs"], getPrograms, {
		initialData: () => {
			const result = queryCache.read<Program>(["programs"]);
			return result;
		},
	});
};
