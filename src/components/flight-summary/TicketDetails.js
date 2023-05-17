import { Box, Paper, Stack, Typography } from "@mui/material";
import React from "react";

const TicketDetails = ({ isMobile, details }) => {
	return (
		<Box
			sx={{
				p: "30px",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				algnItems: "flex-start",
				gap: "30px",
				boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
			}}
		>
			<Typography variant="h4">Flight Summary</Typography>
			<Stack
				direction="column"
				justifyContent="center"
				alignItems="center"
				spacing={5}
			>
				<Stack
					direction="row"
					justifyContent="space-between"
					alignItems="center"
					spacing={3}
					sx={{ width: "100%" }}
				>
					<img src="/images/flight-logo.png" alt="flight-logo" width="150vw" />
					<Typography variant="h5" sx={{ color: "#252f86" }}>
						{details.leaving_from.split(",")[0]}
					</Typography>
					<img src="/images/departure-icon.png" alt="departure" width="40vw" />
					<Typography variant="h5" sx={{ color: "#252f86" }}>
						{details.going_to.split(",")[0]}
					</Typography>
					<Stack
						direction="column"
						justifyContent="center"
						alignItems="center"
						spacing={1}
						sx={{ mr: "20px" }}
					>
						<Typography variant="p" sx={{ color: "#17a5f7" }}>
							DEPARTURE
						</Typography>
						<Typography variant="p">{details.departing_on}</Typography>
					</Stack>
				</Stack>
				<Stack
					direction="row"
					justifyContent="space-between"
					alignItems="center"
					spacing={3}
					sx={{ width: "100%" }}
				>
					<img src="/images/flight-logo.png" alt="flight-logo" width="150vw" />
					<Typography variant="h5" sx={{ color: "#252f86" }}>
						{details.leaving_from.split(",")[0]}
					</Typography>
					<img src="/images/arrival-icon.png" alt="departure" width="40vw" />
					<Typography variant="h5" sx={{ color: "#252f86" }}>
						{details.going_to.split(",")[0]}
					</Typography>
					<Stack
						direction="column"
						justifyContent="center"
						alignItems="center"
						spacing={1}
					>
						<Typography variant="p" sx={{ color: "#17a5f7" }}>
							RETURN
						</Typography>
						<Typography variant="p">{details.returning_on}</Typography>
					</Stack>
				</Stack>
			</Stack>
			<Paper
				variant="outlined"
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					pl: "30px",
					pr: "30px",
					pb: "20px",
					pt: "10px",
					borderRadius: "10px",
					border: "3px solid #b3b3b1",
				}}
			>
				<Typography
					variant="h5"
					sx={{ textDecoration: "underline", color: "#17a5f7" }}
				>
					Flight Details
				</Typography>
				<Stack
					direction="row"
					justifyContent="space-between"
					alignItems="center"
					sx={{ width: "100%" }}
					spacing={15}
				>
					<Stack
						direction="column"
						justifyContent="center"
						alignItems="flex-start"
						spacing={2}
					>
						<Typography variant="p">Airline</Typography>
						<Typography variant="p">Travel From</Typography>
						<Typography variant="p">Travel To</Typography>
						<Typography variant="p">Departure Date</Typography>
						<Typography variant="p">Return Date</Typography>
						<Typography variant="p">Trip Type</Typography>
						<Typography variant="p">Fare Amount</Typography>
					</Stack>
					<Stack
						direction="column"
						justifyContent="center"
						alignItems="flex-end"
						spacing={2}
					>
						<Typography variant="p">AirBlue</Typography>
						<Typography variant="p" fontFamily="Bahnschrift">
							{details.leaving_from}
						</Typography>
						<Typography variant="p" fontFamily="Bahnschrift">
							{details.going_to}
						</Typography>
						<Typography variant="p">{details.departing_on}</Typography>
						<Typography variant="p">{details.returning_on}</Typography>
						<Typography variant="p">
							{
								details.returning_on ? (
									"Round Trip"
								) : (
									"One Way"
								)
							}
						</Typography>
						<Typography variant="p">$ {details.fare}</Typography>
					</Stack>
				</Stack>
			</Paper>
		</Box>
	);
};

export default TicketDetails;
