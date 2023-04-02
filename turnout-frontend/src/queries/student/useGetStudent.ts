import { Student } from "@/models";
import httpCommon from "@/util/http-common";
import { useQuery } from "@tanstack/react-query";

const getStudent = async (id: string) => {
	const response = await httpCommon.get(`/student/${id}`);
	if (response.status === 200) {
		return response.data.student as Student;
	} else {
		throw new Error(response.data.message as string);
	}
};

export const useGetStudent = (id: string) => {
	return useQuery<Student, Error>(["student"], () => getStudent(id), {
		enabled: id !== undefined ? true : false,
	});
};
