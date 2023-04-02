import { WithError, WithLoading } from "@/util-components";
import * as React from "react";
import useProfile from "./useProfile";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import styles from "./Profile.module.css";

const Profile = React.memo(() => {
	const { data, isLoading, isError, error, onUpdatePasswordClick } =
		useProfile();

	return (
		<WithLoading loading={isLoading}>
			<WithError isError={isError} message={error?.message}>
				<Box sx={{ width: "100%", textAlign: "center" }}>
					<Box
						sx={{
							borderRadius: "8px",
							marginLeft: {
								lg: "auto",
								md: "auto",
							},
							marginRight: {
								lg: "auto",
								md: "auto",
							},
							padding: {
								sm: "12px",
								xs: "12px",
								md: "24px",
								lg: "24px",
							},
							backgroundColor: "#fff",
							boxShadow: 3,
							display: "inline-block",
						}}>
						<Box
							sx={{
								borderRadius: "50%",
								width: "200px",
								height: "200px",
								position: "relative",
								margin: "auto",
							}}>
							<Image
								src={
									data?.image !== null || data?.image !== undefined || data?.image !== ""
										? "/images/profile_image.png"
										: data.image
								}
								layout='fill'
								objectFit='contain'
								alt={data?.name as string}
							/>
						</Box>
						<Typography
							gutterBottom
							variant='h5'
							component='div'
							sx={{ fontWeight: "bold", textAlign: "center" }}>
							{data?.name}
						</Typography>
						<Box sx={{ marginTop: "16px", width: "100%" }}>
							<Typography
								gutterBottom
								component='div'
								sx={{
									display: "flex",
									fontSize: {
										xs: "14px",
										sm: "14px",
										md: "18px",
										lg: "18px",
									},
								}}>
								<div style={{ color: "#000AFF", fontWeight: "bold" }}>
									VES Registration Id:
								</div>
								&nbsp;&nbsp;
								{data?.registrationId}
							</Typography>
							<Typography
								gutterBottom
								component='div'
								sx={{
									alignItems: "center",
									fontSize: {
										xs: "14px",
										sm: "14px",
										md: "18px",
										lg: "18px",
									},
									display: "flex",
								}}>
								<div style={{ color: "#000AFF", fontWeight: "bold" }}>VES Email:</div>
								&nbsp;&nbsp;
								{data?.email}
							</Typography>
							<Typography
								gutterBottom
								component='div'
								sx={{
									fontSize: {
										xs: "14px",
										sm: "14px",
										md: "18px",
										lg: "18px",
									},
									display: "flex",
								}}>
								<div style={{ color: "#000AFF", fontWeight: "bold" }}>Department:</div>
								&nbsp;&nbsp;
								{data?.department}
							</Typography>
						</Box>
						<Box sx={{ margin: 0 }}>
							<button className={styles.button}>Edit Details</button>
						</Box>
						<Box sx={{ margin: 0 }}>
							<button className={styles.button} onClick={onUpdatePasswordClick}>
								Change Password
							</button>
						</Box>
						<Box
							sx={{
								borderRadius: "50%",
								width: "60px",
								height: "60px",
								position: "relative",
								margin: "16px auto 0 auto",
								cursor: "pointer",
							}}>
							<Image
								src='/images/logout_image.png'
								layout='fill'
								objectFit='contain'
								alt={data?.name as string}
							/>
						</Box>
					</Box>
				</Box>
			</WithError>
		</WithLoading>
	);
});

export default Profile;
