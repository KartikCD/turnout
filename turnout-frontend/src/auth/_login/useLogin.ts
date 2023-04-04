import { signIn } from "next-auth/react";
import * as React from "react";

interface Props {
	error: string;
	isError: boolean;
	isLoading: boolean;
}

interface InitialValuesProps {
	email: string;
	password: string;
}

export default function useLogin() {
	const [handler, setHandler] = React.useState<Props>({
		error: "",
		isError: false,
		isLoading: false,
	});

	const [initialValues, _setInitialValues] = React.useState<InitialValuesProps>({
		email: "",
		password: "",
	});

	const [isLoginPage, setIsLoginPage] = React.useState<boolean>(true);

	const onLoginClick = React.useCallback(
		async (values: InitialValuesProps) => {
			setHandler(prevProps => ({
				...prevProps,
				isLoading: true,
			}));
			try {
				const res = await signIn("credentials", {
					email: values.email,
					password: values.password,
					redirect: false,
				});

				if (res?.error) {
					setHandler(prevProps => ({
						...prevProps,
						isError: true,
						error: res.error as string,
					}));
				} else {
					setHandler(prevProps => ({
						...prevProps,
						isError: false,
						error: "",
					}));
				}
			} catch (err) {
				setHandler(prevProps => ({
					...prevProps,
					isError: true,
					error: err as string,
				}));
			} finally {
				setHandler(prevProps => ({
					...prevProps,
					isLoading: false,
				}));
			}
		},
		[setHandler]
	);

	const emailValidator = React.useCallback(async (email: string) => {
		if (email === undefined) {
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
		if (password === undefined) {
			return "Please enter password";
		}
		return undefined;
	}, []);

	const changeIsLoginPageState = React.useCallback(
		(value: boolean) => {
			setIsLoginPage(value);
		},
		[setIsLoginPage]
	);

	const onSignUpClick = React.useCallback(() => {
		changeIsLoginPageState(false);
	}, [changeIsLoginPageState]);

	return {
		onLoginClick,
		handler,
		initialValues,
		emailValidator,
		passwordValidator,
		isLoginPage,
		changeIsLoginPageState,
		onSignUpClick,
	};
}
