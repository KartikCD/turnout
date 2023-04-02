import * as React from "react";
import useChangePassword from "./useChangePassword";
import useProgramId from "@/pages/events/useProgramId";
import { WithError, WithLoading } from "@/util-components";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Field, Form } from "react-final-form";

const ChangePassword = React.memo(() => {
	const id = useProgramId();
	const {
		data,
		isLoading,
		isError,
		error,
		onSubmit,
		initialValues,
		passwordValidator,
		newPasswordValidator,
		repeatPasswordValidator,
	} = useChangePassword(id);

	return (
		<WithLoading loading={isLoading}>
			<WithError isError={isError} message={error?.message}>
				<Box>
					<Typography
						variant='h4'
						component='h5'
						sx={{
							textAlign: "center",
							width: "100%",
							marginBottom: "24px",
						}}>
						Change Password
					</Typography>
					<Box>
						<Form
							keepDirtyOnReinitialize
							onSubmit={onSubmit}
							initialValues={initialValues}
							render={({ handleSubmit, pristine }) => {
								return (
									<form onSubmit={handleSubmit}>
										<Field
											name='password'
											validate={passwordValidator}
											render={({ input: { value, onChange }, meta: { error } }) => {
												return (
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
												);
											}}
										/>
										<Field
											name='newPassword'
											validate={newPasswordValidator}
											render={({ input: { value, onChange }, meta: { error } }) => {
												return (
													<TextField
														error={error === "" || error === undefined ? false : true}
														id='outlined-error-helper-text'
														label='New Password'
														defaultValue={value}
														value={value}
														type='password'
														onChange={onChange}
														helperText={error}
														sx={{ width: "100%", marginTop: "8px", marginBottom: "8px" }}
													/>
												);
											}}
										/>
										<Field
											name='newConfirmPassword'
											validate={repeatPasswordValidator}
											render={({ input: { value, onChange }, meta: { error } }) => {
												return (
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
												);
											}}
										/>
										<Button
											type='submit'
											disabled={pristine}
											sx={{
												float: "right",
												borderRadius: "8px",
												border: "1px solid black",
												background: "#000",
												marginTop: "8px",
												padding: "12px",
												color: "yellow",
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
													textDecoration: "none",
													background: "#000",
													color: "#FFE600",
												},
											}}>
											Change Password.
										</Button>
									</form>
								);
							}}
						/>
					</Box>
				</Box>
			</WithError>
		</WithLoading>
	);
});

export default ChangePassword;
