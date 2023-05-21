import React from "react";
import { Paper, Stack, Typography } from "@mui/material";

const DesktopAbout = () => {
	return (
		<Stack
			direction="column"
			justifyContent="center"
			alignItems="center"
			spacing={15}
		>
			<Stack
				direction="row"
				justifyContent="center"
				alignItems="center"
				spacing={6}
			>
				<Stack
					direction="column"
					justifyContent="center"
					alignItems="center"
					spacing={3}
					sx={{ maxWidth: "30vw" }}
				>
					<Typography variant="h3" textAlign="center">
						About Us
					</Typography>
					<Typography variant="h6" textAlign="center">
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
						width: "45vw",
						height: "55vh",
						borderRadius: "10px",
					}}
				/>
			</Stack>
			<Stack
				direction="row"
				justifyContent="center"
				alignItems="center"
				spacing={6}
			>
				<Paper
					elavation={3}
					sx={{
						backgroundImage: "url('/images/mission.png')",
						backgroundSize: "100% 100%",
						backgroundRepeat: "no-repeat",
						width: "45vw",
						height: "55vh",
						borderRadius: "10px",
					}}
				/>
				<Stack
					direction="column"
					justifyContent="center"
					alignItems="center"
					spacing={3}
					sx={{ maxWidth: "35vw" }}
				>
					<Typography variant="h3" textAlign="center">
						Our Mission
					</Typography>
					<Typography variant="h6" textAlign="center">
						Our mission is to help travellers to plan and book your best tours,
						even though the implementation of strict quality requirements. The
						vastness of the world, should inspire us. We are committed to
						providing the continuous experience of the visitors from all over
						the world. From the no-exclusive, as we try to get you to go and
						find out by yourself.
					</Typography>
				</Stack>
			</Stack>
			<Stack
				direction="row"
				justifyContent="center"
				alignItems="center"
				spacing={6}
			>
				<Stack
					direction="column"
					justifyContent="center"
					alignItems="center"
					spacing={3}
					sx={{ maxWidth: "35vw" }}
				>
					<Typography variant="h3" textAlign="center">
						Our Approach
					</Typography>
					<Typography variant="h6" textAlign="center">
						We want nothing more than to share their thinking, when you discover
						the world in one place at the same time. We offer you a wide variety
						of activities, including a variety of activities and tours in over
						250 locations around the globe. To enjoy, simply browse through our
						cities and towns, in order to see what is available, in order to
						enhace your travel experience.
					</Typography>
				</Stack>
				<Paper
					elavation={3}
					sx={{
						backgroundImage: "url('/images/approach.png')",
						backgroundSize: "100% 100%",
						backgroundRepeat: "no-repeat",
						width: "45vw",
						height: "55vh",
						borderRadius: "10px",
					}}
				/>
			</Stack>
		</Stack>
	);
};

export default DesktopAbout;
