import { Student } from "@/models";
import { PATHS } from "@/paths";
import { useGetStudent } from "@/queries/student/useGetStudent";
import { useUpdateStudentDetails } from "@/queries/student/useUpdateStudentDetails";
import { useRouter } from "next/router";
import * as React from "react";

export default function useChangePassword(id: string) {
	const { data, isLoading, isError, error, refetch } = useGetStudent(id);
	const [initialValues, setInitialValues] = React.useState<Student>({
		name: "",
		email: "",
		department: "",
		registrationId: "",
		password: "",
		_id: "",
		newPassword: "",
		newConfirmPassword: "",
	});
	const { mutate: updateStudentDetails } = useUpdateStudentDetails();
	const router = useRouter();

	React.useEffect(() => {
		if (id !== null || id !== undefined || id !== "") {
			refetch();
		}
	}, [id]);

	React.useEffect(() => {
		if (data !== undefined) {
			setInitialValues(prevData => ({
				...prevData,
				...data,
				password: "",
			}));
		}
	}, [data]);

	const onSubmit = React.useCallback(
		async (values: Student) => {
			if (values.newConfirmPassword !== values.newPassword) {
				alert("Please new password and confirm password should match.");
				return false;
			}

			let studentDetail: Student = {
				...values,
			};

			delete studentDetail.newConfirmPassword;

			updateStudentDetails(studentDetail, {
				onSuccess() {
					router.push(PATHS.PROFILE);
				},
				onError() {
					alert("Something went wrong changing password.");
				},
			});
		},
		[updateStudentDetails, router]
	);

	const passwordValidator = React.useCallback(async (password: string) => {
		if (password === undefined) {
			return "Please enter old password";
		}
		return undefined;
	}, []);

	const newPasswordValidator = React.useCallback(async (newPassword: string) => {
		if (newPassword === undefined) {
			return "Please enter new password";
		}
		return undefined;
	}, []);

	const repeatPasswordValidator = React.useCallback(
		async (repeatPassword: string) => {
			if (repeatPassword === undefined) {
				return "Please confirm new password.";
			}
			return undefined;
		},
		[]
	);

	return {
		data,
		isLoading,
		isError,
		error,
		initialValues,
		onSubmit,
		passwordValidator,
		newPasswordValidator,
		repeatPasswordValidator,
	};
}
