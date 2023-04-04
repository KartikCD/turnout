import { Event } from "@/models";
import {
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	Grid,
	Typography,
} from "@mui/material";
import * as React from "react";
import { Registration } from "@/models/_registrations/Registration";

interface Props {
	event: Event;
	onClick: (registration: Registration) => void;
	studentId: string;
}

const EventListItem: React.FC<Props> = React.memo(
	({ event, onClick, studentId }) => {
		const onButtonClick = React.useCallback(() => {
			onClick({
				eventId: event._id,
				eventName: event.name,
				studentId: studentId,
			});
		}, [onClick, event, studentId]);

		const date = new Date(event.date);

		return (
			<Grid
				item
				lg={4}
				md={6}
				sm={12}
				xs={12}
				sx={{
					paddingLeft: {
						xs: 0,
						sm: 0,
						lg: "16px",
						md: "16px",
					},
					paddingTop: {
						xs: "16px",
						sm: "16px",
						lg: "24px",
						md: "24px",
					},
				}}
				paddingLeft={0}>
				<Card
					sx={{
						backgRoundColor: "#fff",
						boxShadow: 3,
					}}>
					<CardActionArea disabled={true}>
						<CardContent>
							<Typography
								gutterBottom
								sx={{
									fontSize: {
										xs: "16px",
										sm: "16px",
										lg: "18px",
										md: "18px",
									},
								}}
								component='div'>
								Name: {event.name}
							</Typography>
							<Typography
								gutterBottom
								sx={{
									fontSize: {
										xs: "16px",
										sm: "16px",
										lg: "18px",
										md: "18px",
									},
								}}
								component='div'>
								Date: {date.toLocaleDateString()}
							</Typography>
							<Typography
								gutterBottom
								sx={{
									fontSize: {
										xs: "16px",
										sm: "16px",
										lg: "18px",
										md: "18px",
									},
								}}
								component='div'>
								Reporting Time: {event.reportingTime}
							</Typography>
							<Typography
								gutterBottom
								sx={{
									fontSize: {
										xs: "16px",
										sm: "16px",
										lg: "18px",
										md: "18px",
									},
								}}
								component='div'>
								Venue: {event.venue}
							</Typography>
							<Typography
								gutterBottom
								sx={{
									fontSize: {
										xs: "16px",
										sm: "16px",
										lg: "18px",
										md: "18px",
									},
									overflowY: "scroll",
									minHeight: {
										lg: "220px",
										md: "220px",
									},
									maxHeight: {
										xs: "220px",
										sm: "220px",
										lg: "220px",
										md: "220px",
									},
								}}
								component='div'>
								<i>Description</i>: {event.description}
							</Typography>
							<Typography
								gutterBottom
								sx={{
									fontSize: {
										xs: "16px",
										sm: "16px",
										lg: "18px",
										md: "18px",
									},
								}}
								component='div'>
								Note: {event.note}
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions>
						{event.poster === "" ? (
							<></>
						) : (
							<Button
								size='small'
								sx={{
									backgroundColor: "#FFBE00",
									color: "#000",
									":hover": {
										bgcolor: "#FFBE00",
									},
									padding: "8px",
									fontSize: "10px",
								}}
								disabled={event.poster === "" ? true : false}>
								View Poster
							</Button>
						)}

						<Button
							size='small'
							sx={{
								backgroundColor: "#FFBE00",
								color: "#000",
								":hover": {
									bgcolor: "#FFBE00",
								},
								padding: "8px",
								fontSize: "10px",
							}}
							onClick={onButtonClick}>
							Register
						</Button>
					</CardActions>
				</Card>
			</Grid>
		);
	}
);

export default EventListItem;
