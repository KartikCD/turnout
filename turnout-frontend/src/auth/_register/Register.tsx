import * as React from "react";
import useRegister from "./useRegister";
import {
	Box,
	Button,
	FormControl,
	FormHelperText,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	Typography,
} from "@mui/material";
import { Field, Form } from "react-final-form";
import { WithError, WithLoading } from "@/util-components";
import { DEPARTMENTS } from "@/constants";

interface Props {
	onRegister: (value: boolean) => void;
}

export const Register: React.FC<Props> = React.memo(({ onRegister }) => {
	const {
		onRegisterClick,
		initialValues,
		emailValidator,
		passwordValidator,
		confirmPasswordValidator,
		nameValidator,
		departmentValidator,
		handler: { isLoading, isError, error },
		registrationIdValidator,
		onLoginClick,
	} = useRegister(onRegister);

	const listOptions = React.useMemo(() => {
		const options = DEPARTMENTS.map(department => {
			return (
				<MenuItem value={department} key={department}>
					{department}
				</MenuItem>
			);
		});

		options?.unshift(
			<MenuItem value='select department' key='select department'>
				Select Department
			</MenuItem>
		);

		return options;
	}, []);

	return (
		<>
			<Box>
				<Typography
					variant='h4'
					component='h5'
					sx={{
						textAlign: "center",
						width: "100%",
						marginBottom: "24px",
					}}>
					Turnout Register
				</Typography>
				<Box>
					<Form
						keepDirtyOnReinitialize
						onSubmit={onRegisterClick}
						initialValues={initialValues}
						render={({ handleSubmit, pristine }) => {
							return (
								<form onSubmit={handleSubmit}>
									<Field
										name='name'
										validate={nameValidator}
										render={({ input: { value, onChange }, meta: { error } }) => (
											<TextField
												error={error === "" || error === undefined ? false : true}
												id='outlined-error-helper-text'
												label='Name'
												defaultValue={value}
												value={value}
												type='text'
												onChange={onChange}
												helperText={error}
												sx={{ width: "100%", marginTop: "8px", marginBottom: "8px" }}
											/>
										)}
									/>
									<Field
										name='email'
										validate={emailValidator}
										render={({ input: { value, onChange }, meta: { error } }) => (
											<TextField
												error={error === "" || error === undefined ? false : true}
												id='outlined-error-helper-text'
												label='Email Address'
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
										name='registrationId'
										validate={registrationIdValidator}
										render={({ input: { value, onChange }, meta: { error } }) => (
											<TextField
												error={error === "" || error === undefined ? false : true}
												id='outlined-error-helper-text'
												label='Registration Id'
												defaultValue={value}
												value={value}
												type='text'
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

									<Field
										name='newConfirmPassword'
										validate={confirmPasswordValidator}
										render={({ input: { value, onChange }, meta: { error } }) => (
											<TextField
												error={error === "" || error === undefined ? false : true}
												id='outlined-error-helper-text'
												label='Confirm Password'
												defaultValue={value}
												value={value}
												type='password'
												onChange={onChange}
												helperText={error}
												sx={{ width: "100%", marginTop: "8px", marginBottom: "8px" }}
											/>
										)}
									/>

									<Field
										name='department'
										validate={departmentValidator}
										render={({ input: { value, onChange }, meta: { error } }) => (
											<FormControl
												sx={{ width: "100%", marginTop: "8px", marginBottom: "8px" }}
												error={error === "" || error === undefined ? false : true}>
												<InputLabel id='demo-simple-select-error-label'>
													Department
												</InputLabel>
												<Select
													labelId='demo-simple-select-error-label'
													id='demo-simple-select-error'
													label='Department'
													value={value}
													onChange={onChange}>
													{listOptions}
												</Select>
												<FormHelperText>{error}</FormHelperText>
											</FormControl>
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
											Register
										</Button>
									</div>
									<div
										style={{
											width: "100%",
											display: "flex",
											marginTop: "8px",
											marginBottom: "24px",
										}}>
										<span
											style={{ margin: "auto", fontSize: "18px", marginBottom: "24px" }}>
											Already a member ?
											<button
												style={{
													border: "none",
													background: "none",
													cursor: "pointer",
													color: "#4f3cc9",
													fontSize: "18px",
												}}
												type='button'
												onClick={onLoginClick}>
												Sign In
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
	);
});
