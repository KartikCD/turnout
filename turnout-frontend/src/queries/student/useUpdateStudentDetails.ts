import { Student } from "@/models";
import httpCommon from "@/util/http-common";
import { useMutation } from "@tanstack/react-query";

const updateStudentDetails = async (student: Student) => {
	const response = await httpCommon.put(
		`/student/${student._id as unknown as string}`,
		student
	);
	if (response.status === 200) {
		return response.data.student as Student;
	}
	throw new Error(response.data.message);
};

export const useUpdateStudentDetails = () => {
	return useMutation(updateStudentDetails);
};
