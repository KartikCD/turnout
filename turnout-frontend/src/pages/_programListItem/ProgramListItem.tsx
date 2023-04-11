import { Program } from "@/models";
import {
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Grid,
	Typography,
} from "@mui/material";
import * as React from "react";

interface Props {
	program: Program;
	onClick: (id: string) => void;
}

const ProgramListItem: React.FC<Props> = React.memo(({ program, onClick }) => {
	const onButtonClick = React.useCallback(() => {
		onClick(program._id);
	}, [onClick, program]);

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
					lg: "24px",
					md: "24px",
				},
				paddingTop: {
					xs: "16px",
					sm: "16px",
					lg: "24px",
					md: "24px",
				},
			}}
			paddingLeft={0}>
			<Card sx={{ backgroundColor: "#fff", boxShadow: 3 }}>
				<CardActionArea onClick={onButtonClick}>
					<CardMedia
						component='img'
						height='140'
						image={
							program.poster !== ""
								? `http://127.0.0.1:5050/uploads/program_files/${program.poster}`
								: "/images/mu.png"
						}
						sx={{ padding: "8px", maxWidth: "100%", objectFit: "contain" }}
						alt={program.name}
					/>
					<CardContent>
						<Typography gutterBottom variant='h5' component='div'>
							{program.name}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
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
						View Events
					</Button>
				</CardActions>
			</Card>
		</Grid>
	);
});

export default ProgramListItem;
