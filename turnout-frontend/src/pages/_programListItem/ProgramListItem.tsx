import { Program } from "@/models";
import { Grid, Paper, styled } from "@mui/material";
import * as React from "react";

interface Props {
	program: Program;
	onClick: (id: string) => void;
}

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: "#FEF028",
	...theme.typography.body2,
	padding: theme.spacing(2),
	textAlign: "center",
	color: "#092C4E",
}));

const ProgramListItem: React.FC<Props> = React.memo(({ program, onClick }) => {
	return (
		<Grid item lg={4} md={6} sm={12}>
			<Item>{JSON.stringify(program)}</Item>
		</Grid>
	);
});

export default ProgramListItem;
