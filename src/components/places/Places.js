import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import React from "react";

const Places = ({ isMobile }) => {
	return (
		<Container
			maxWidth="xl"
			sx={{
				p: "50px",
				display: "flex",
				flexDirection: isMobile ? "column" : "row",
				justifyContent: "center",
				alignItems: "center",
				gap: "40px",
				background: "#f0f0e8",
			}}
		>
			<Stack
				direction="column"
				justifyContent="center"
				alignItems="center"
				spacing={1}
			>
				<Paper
					elevation={0}
					sx={{
						background: "url('/images/accra-pic.png'), #f0f0e8",
						backgroundSize: "100% 100%",
						backgroundRepeat: "no-repeat",
						width: "340px",
						height: "340px",
						position: "relative",
					}}
				>
					<Box
						sx={{
							width: "170px",
							background: "rgb(70,174,247)",
							background:
								"radial-gradient(circle, rgba(70,174,247,1) 0%, rgba(29,213,230,1) 100%)",
							p: "5px",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							borderRadius: "5px",
							position: "absolute",
							top: 25,
							left: 25,
						}}
					>
						<Typography
							variant="subtitle2"
							sx={{ color: "white", fontSize: "10px" }}
						>
							Summer Escapes in Accra
						</Typography>
					</Box>
				</Paper>
				<Typography
					variant="subtitle2"
					sx={{ textAlign: "center", maxWidth: "250px" }}
				>
					Immerse yourself in the rich history and culture of Accra with our
					travel package that includes visits to iconic landmarks, delicious
					local cuisine, and vibrant nightlife
				</Typography>
			</Stack>
			<Stack
				direction="column"
				justifyContent="center"
				alignItems="center"
				spacing={1}
			>
				<Paper
					elevation={0}
					sx={{
						background: "url('/images/harare-pic.png'), #f0f0e8",
						backgroundSize: "100% 100%",
						backgroundRepeat: "no-repeat",
						width: "340px",
						height: "340px",
						position: "relative",
					}}
				>
					<Box
						sx={{
							width: "170px",
							background: "rgb(70,174,247)",
							background:
								"radial-gradient(circle, rgba(70,174,247,1) 0%, rgba(29,213,230,1) 100%)",
							p: "5px",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							borderRadius: "5px",
							position: "absolute",
							top: 25,
							left: 25,
						}}
					>
						<Typography
							variant="subtitle2"
							sx={{ color: "white", fontSize: "10px" }}
						>
							Exotic Journeys in Harare
						</Typography>
					</Box>
				</Paper>
				<Typography
					variant="subtitle2"
					sx={{ textAlign: "center", maxWidth: "250px" }}
				>
					Discover the natural beauty and diverse wildlife of Harare with our
					travel package that offers exciting safari tours, scenic hiking
					trails, and authentic cultural experiences
				</Typography>
			</Stack>
			<Stack
				direction="column"
				justifyContent="center"
				alignItems="center"
				spacing={1}
			>
				<Paper
					elevation={0}
					sx={{
						background: "url('/images/lagos-pic.png'), #f0f0e8",
						backgroundSize: "100% 100%",
						backgroundRepeat: "no-repeat",
						width: "340px",
						height: "340px",
						position: "relative",
					}}
				>
					<Box
						sx={{
							width: "170px",
							background: "rgb(70,174,247)",
							background:
								"radial-gradient(circle, rgba(70,174,247,1) 0%, rgba(29,213,230,1) 100%)",
							p: "5px",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							borderRadius: "5px",
							position: "absolute",
							top: 25,
							left: 25,
						}}
					>
						<Typography
							variant="subtitle2"
							sx={{ color: "white", fontSize: "10px" }}
						>
							Romantic Weekends in Lagos
						</Typography>
					</Box>
				</Paper>
				<Typography
					variant="subtitle2"
					sx={{ textAlign: "center", maxWidth: "250px" }}
				>
					Experience the dynamic energy and bustling city life of Lagos with our
					travel package that includes visits to popular attractions, delicious
					cuisine, and vibrant entertainment options
				</Typography>
			</Stack>
		</Container>
	);
};

export default Places;
