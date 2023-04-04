import { AdapterAccount } from "./../../../node_modules/next-auth/adapters.d";
import { Student } from "@/models";
import { useRegisterStudent } from "@/queries/student/useRegisterStudent";
import { useRouter } from "next/router";
import * as React from "react";

interface Props {
	error: string;
	isError: boolean;
	isLoading: boolean;
}

export default function useRegister(onRegister: (value: boolean) => void) {
	const [handler, setHandler] = React.useState<Props>({
		error: "",
		isLoading: false,
		isError: false,
	});

	const [initialValues, _setInitialValues] = React.useState<Student>({
		name: "",
		email: "",
		password: "",
		newConfirmPassword: "",
		registrationId: "",
		department: "select department",
	});

	const { mutate: registerStudent } = useRegisterStudent();
	const router = useRouter();

	const nameValidator = React.useCallback(async (name: string) => {
		if (name === undefined || name === "") {
			return "Please enter name";
		}

		return undefined;
	}, []);

	const emailValidator = React.useCallback(async (email: string) => {
		if (email === undefined || email === "") {
			return "Please enter email address";
		}
		if (
			email !== "" &&
			!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
		) {
			return "Please enter valid email address";
		}

		return undefined;
	}, []);

	const passwordValidator = React.useCallback(async (password: string) => {
		if (password === undefined || password === "") {
			return "Please enter password";
		}

		return undefined;
	}, []);

	const confirmPasswordValidator = React.useCallback(
		async (password: string) => {
			if (password === undefined || password === "") {
				return "Please enter confirm password";
			}

			return undefined;
		},
		[]
	);

	const departmentValidator = React.useCallback(async (department: string) => {
		if (department === undefined || department === "") {
			return "Please choose department";
		}

		if (department === "select department") {
			return "Please choose department";
		}
		return undefined;
	}, []);

	const registrationIdValidator = React.useCallback(
		async (registrationId: string) => {
			if (registrationId === undefined || registrationId === "") {
				return "Please enter registration id.";
			}
			return undefined;
		},
		[]
	);

	const onRegisterClick = React.useCallback(
		async (student: Student) => {
			if (student.password !== student.newConfirmPassword) {
				alert("Both password should match.");
				return false;
			}

			delete student.newConfirmPassword;

			try {
				setHandler(prevProps => ({
					...prevProps,
					isLoading: true,
				}));

				registerStudent(student, {
					onError() {
						setHandler(prevProps => ({
							...prevProps,
							isLoading: false,
							isError: true,
							error: "Registration failed.",
						}));
					},
					onSuccess() {
						onRegister(true);
					},
				});
			} catch (err) {
				setHandler(prevProps => ({
					...prevProps,
					isLoading: false,
					isError: true,
					error: "Registration failed.",
				}));
			}
		},
		[setHandler, onRegister]
	);

	const onLoginClick = React.useCallback(() => {
		onRegister(true);
	}, [onRegister]);

	return {
		onRegisterClick,
		handler,
		initialValues,
		nameValidator,
		emailValidator,
		passwordValidator,
		confirmPasswordValidator,
		departmentValidator,
		registrationIdValidator,
		onLoginClick,
	};
}
