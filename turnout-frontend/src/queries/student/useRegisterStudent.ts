import { Student } from "@/models";
import httpCommon from "@/util/http-common";
import { useMutation } from "@tanstack/react-query";

const registerStudent = async (student: Student) => {
	delete student?.newConfirmPassword;
	delete student?.newPassword;
	delete student?.token;

	const response = await httpCommon.post("/student", student);

	if (response.status === 201) {
		return response.data.student as Student;
	}

	throw new Error(response.data.message);
};

export const useRegisterStudent = () => {
	return useMutation(registerStudent);
};
