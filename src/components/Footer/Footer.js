import React from "react";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = ({ isMobile }) => {
	return (
		<Stack
			direction={isMobile ? "column" : "row"}
			justifyContent="center"
			alignItems="center"
			spacing={5}
			sx={{
				pt: "40px",
				pb: "40px",
				background: "#2e2e2e",
			}}
		>
			<img
				src="/images/flight-axis-logo.png"
				alt="logo"
				width={isMobile ? "340" : "440px"}
				height={isMobile ? "120px" : "150px"}
				style={{ marginRight: isMobile ? 0 : "30px" }}
			/>
			<img
				src="/images/trust-pilot-5-star.png"
				alt="trust-pilot"
				width="300px"
				height="150px"
				style={{ marginRight: isMobile ? 0 : "40px" }}
			/>
			<Stack
				direction="column"
				justifyContent="center"
				alignItems="flex-start"
				spacing={1}
			>
				<Typography
					variant="h5"
					sx={{
						color: "#17a5f7",
						fontWeight: "700",
						mb: "10px",
					}}
				>
					Have a Question?
				</Typography>
				<Typography
					variant="p"
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						color: "white",
					}}
				>
					<img src="/images/call-icon.png" alt="message" width="25px" />
					&nbsp; 02032871426
				</Typography>
				<Typography
					variant="subtitle2"
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						color: "white",
					}}
				>
					<img src="/images/message-icon.png" alt="message" width="25px" />
					&nbsp; Support@flightaxis.co.uk
				</Typography>
				<Typography
					variant="p"
					sx={{
						color: "white",
					}}
				>
					24/7 Dedicated Customer Support
				</Typography>
				<Typography
					variant="h6"
					sx={{
						color: "#17a5f7",
					}}
				>
					<Link
						style={{ textDecoration: "none", color: "#17a5f7" }}
						to="/terms-and-conditions"
					>
						Terms & Conditions
					</Link>
				</Typography>
			</Stack>
		</Stack>
	);
};

export default Footer;
