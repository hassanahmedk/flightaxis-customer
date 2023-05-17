import React from "react";
import { Paper, Stack, Typography } from "@mui/material";

const MobileAbout = () => {
	return (
		<Stack
			direction="column"
			justifyContent="center"
			alignItems="center"
			spacing={10}
		>
			<Stack
				direction="column"
				justifyContent="center"
				alignItems="center"
				spacing={6}
			>
				<Stack
					direction="column"
					justifyContent="center"
					alignItems="center"
					spacing={3}
				>
					<Typography variant="h4" textAlign="center">
						About Us
					</Typography>
					<Typography variant="subtitle1" textAlign="center">
						FlightAxis empowers the voyager to organize and book the ideal
						visit. We offer dependable data from true blue voyagers and
						furthermore offer a broad scope of movement alternatives and
						arranging administrations.FlightAxis has been made to enable
						voyagers with direct reserving and wide-going decisions for going
						all throughout the planet.
					</Typography>
				</Stack>
				<Paper
					elavation={3}
					sx={{
						backgroundImage: "url('/images/about-us.png')",
						backgroundSize: "100% 100%",
						backgroundRepeat: "no-repeat",
						width: "80vw",
						height: "30vh",
						borderRadius: "10px",
					}}
				/>
			</Stack>
			<Stack
				direction="column"
				justifyContent="center"
				alignItems="center"
				spacing={6}
			>
				<Stack
					direction="column"
					justifyContent="center"
					alignItems="center"
					spacing={3}
				>
					<Typography variant="h4" textAlign="center">
						Our Mission
					</Typography>
					<Typography variant="subtitle1" textAlign="center">
						Our mission is to help travellers to plan and book your best tours,
						even though the implementation of strict quality requirements. The
						vastness of the world, should inspire us. We are committed to
						providing the continuous experience of the visitors from all over
						the world. From the no-exclusive, as we try to get you to go and
						find out by yourself.
					</Typography>
				</Stack>
				<Paper
					elavation={3}
					sx={{
						backgroundImage: "url('/images/mission.png')",
						backgroundSize: "100% 100%",
						backgroundRepeat: "no-repeat",
						width: "80vw",
						height: "30vh",
						borderRadius: "10px",
					}}
				/>
			</Stack>
			<Stack
				direction="column"
				justifyContent="center"
				alignItems="center"
				spacing={6}
			>
				<Stack
					direction="column"
					justifyContent="center"
					alignItems="center"
					spacing={3}
				>
					<Typography variant="h4" textAlign="center">
						Our Approach
					</Typography>
					<Typography variant="subtitle1" textAlign="center">
						Our mission is to help travellers to plan and book your best tours,
						even though the implementation of strict quality requirements. The
						vastness of the world, should inspire us. We are committed to
						providing the continuous experience of the visitors from all over
						the world. From the no-exclusive, as we try to get you to go and
						find out by yourself.
					</Typography>
				</Stack>
				<Paper
					elavation={3}
					sx={{
						backgroundImage: "url('/images/approach.png')",
						backgroundSize: "100% 100%",
						backgroundRepeat: "no-repeat",
						width: "80vw",
						height: "30vh",
						borderRadius: "10px",
					}}
				/>
			</Stack>
		</Stack>
	);
};

export default MobileAbout;
