import * as React from "react";
import { signIn } from "next-auth/react";

export default function useLogin() {
	const onLoginClick = React.useCallback(async () => {
		await signIn("credentials", {
			email: "chawdakartik@gmail.com",
			password: "nayan",
			redirect: false,
		});
	}, []);

	return {
		onLoginClick,
	};
}
