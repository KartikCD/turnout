import * as React from "react";
import useLogin from "./useLogin";

const SignIn = React.memo(() => {
	const { onLoginClick } = useLogin();

	return <button onClick={onLoginClick}>Login</button>;
});

export default SignIn;
