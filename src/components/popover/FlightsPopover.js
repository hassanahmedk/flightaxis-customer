import React from "react";
import {
	Dialog,
	DialogContent,
	Typography,
	Button,
	Grid,
	DialogContentText,
} from "@mui/material";
import { Link } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function FlightsPopover({
	openPop,
	handleClickPop,
	handleClosePop,
}) {
	return (
		<Dialog open={openPop} onClose={handleClosePop}>
			<DialogContent>
				<Grid container sx={{ p: "30px" }}>
					<Grid item xs={12} md={3}>
						<Typography
							variant="p"
							sx={{
								pl: 2,
								pr: 2,
								pt: 1,
								pb: 1,
								border: "1px solid blue",
								borderRadius: "5px",
								fontFamily: "Poppins",
								"&:hover": {
									opacity: 0.9,
								},
							}}
						>
							<Link
								style={{
									textDecoration: "none",
									color: "black",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}
								to="/cheap-flights"
								onClick={handleClosePop}
							>
								Australia <ChevronRightIcon />
							</Link>
						</Typography>
					</Grid>
				</Grid>
			</DialogContent>
		</Dialog>
	);
}
