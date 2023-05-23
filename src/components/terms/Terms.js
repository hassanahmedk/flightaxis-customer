import { Box, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { termsText } from "./termsText";

const Terms = ({ isMobile }) => {
	console.log(termsText[0].text);

	return (
		<Stack
			direction="column"
			justifyContent="center"
			alignItems="center"
			sx={{ background: "#f0f0e8", pt: "30px", pb: "30px" }}
		>
			<Stack
				direction="row"
				justifyContent={"center"}
				alignItems="center"
				sx={{ width: "100%" }}
			>
				<Box
					sx={{
						background: "#36bdf1",
						height: "10px",
						borderTopRightRadius: "10px",
						borderBottomRightRadius: "10px",
						width: "100%",
					}}
				/>
				<Typography
					variant={isMobile ? "h6" : "h4"}
					textAlign="center"
					sx={{ width: "100%" }}
				>
					Terms and Conditions
				</Typography>
				<Box
					sx={{
						background: "#36bdf1",
						height: "10px",
						borderTopLeftRadius: "10px",
						borderBottomLeftRadius: "10px",
						width: "100%",
					}}
				/>
			</Stack>
			<Box
				display="flex"
				flexDirection="column"
				justifyContent="center"
				alignItems="center"
				sx={{ p: "30px" }}
			>
				<Typography
					variant="h5"
					textAlign="center"
					sx={{ maxWidth: "70vw", mb: "30px" }}
				>
					By making a booking you confirm that you and all members of your party
					are authorized to accept these terms and conditions. The laws of
					England govern this user agreement between you and flightaxis.co.uk.
				</Typography>
				{termsText.map((term) => (
					<Paper
						elevation={2}
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "flex-start",
							gap: "10px",
							p: "40px",
							borderRadius: "10px",
							width: "70vw",
							mb: "30px",
						}}
						key={term.heading}
					>
						<Typography variant="h4" fontFamily="Bahnschrift">
							{term.heading}
						</Typography>
						<Typography variant="subtitle2">{term.text}</Typography>
					</Paper>
				))}
			</Box>
		</Stack>
	);
};

export default Terms;
