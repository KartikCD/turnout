import * as React from "react";
import useLogin from "./useLogin";
import { WithError, WithLoading } from "@/util-components";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Field, Form } from "react-final-form";
import { Register } from "../_register/Register";

export const Login = React.memo(() => {
	const {
		onLoginClick,
		initialValues,
		handler: { isLoading, isError, error },
		emailValidator,
		passwordValidator,
		isLoginPage,
		changeIsLoginPageState,
		onSignUpClick,
	} = useLogin();

	return (
		<>
			{isLoginPage ? (
				<>
					{" "}
					<Box>
						<Typography
							variant='h4'
							component='h5'
							sx={{
								textAlign: "center",
								width: "100%",
								marginBottom: "24px",
							}}>
							Turnout Login
						</Typography>
						<Box>
							<Form
								keepDirtyOnReinitialize
								onSubmit={onLoginClick}
								initialValues={initialValues}
								render={({ handleSubmit, pristine }) => {
									return (
										<form onSubmit={handleSubmit}>
											<Field
												name='email'
												validate={emailValidator}
												render={({ input: { value, onChange }, meta: { error } }) => (
													<TextField
														error={error === "" || error === undefined ? false : true}
														id='outlined-error-helper-text'
														label='Email'
														defaultValue={value}
														value={value}
														type='email'
														onChange={onChange}
														helperText={error}
														sx={{ width: "100%", marginTop: "8px", marginBottom: "8px" }}
													/>
												)}
											/>
											<Field
												name='password'
												validate={passwordValidator}
												render={({ input: { value, onChange }, meta: { error } }) => (
													<TextField
														error={error === "" || error === undefined ? false : true}
														id='outlined-error-helper-text'
														label='Password'
														defaultValue={value}
														value={value}
														type='password'
														onChange={onChange}
														helperText={error}
														sx={{ width: "100%", marginTop: "8px", marginBottom: "8px" }}
													/>
												)}
											/>
											<div style={{ width: "100%", display: "flex" }}>
												<Button
													type='submit'
													disabled={pristine}
													sx={{
														borderRadius: "8px",
														border: "1px solid black",
														background: "#000",
														margin: "8px auto 8px auto",
														padding: "12px 64px",
														color: "yellow",
														cursor: "pointer",
														pointerEvents: "all",
														":hover": {
															textDecoration: "none",
															background: "#000",
														},
														":active": {
															textDecoration: "none",
															background: "#000",
														},
														":disabled": {
															cursor: "not-allowed",
															pointerEvents: "all !important",
															textDecoration: "none",
															background: "#000",
															color: "#FFE600",
														},
													}}>
													Login
												</Button>
											</div>
											<div
												style={{
													width: "100%",
													display: "flex",
													marginTop: "8px",
												}}>
												<span
													style={{ margin: "auto", fontSize: "18px", marginBottom: "24px" }}>
													Not a member ?
													<button
														style={{
															border: "none",
															background: "none",
															cursor: "pointer",
															color: "#4f3cc9",
															fontSize: "18px",
														}}
														type='button'
														onClick={onSignUpClick}>
														Sign up now
													</button>
												</span>
											</div>
										</form>
									);
								}}
							/>
						</Box>
					</Box>
					<WithLoading loading={isLoading}>
						<WithError isError={isError} message={error}></WithError>
					</WithLoading>
				</>
			) : (
				<Register onRegister={changeIsLoginPageState} />
			)}
		</>
	);
});
