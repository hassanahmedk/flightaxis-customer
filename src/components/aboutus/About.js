import { Box, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import DesktopAbout from "./DesktopAbout";
import MobileAbout from "./MobileAbout";

const About = ({ isMobile }) => {
	return (
		<Box
			sx={{
				background: "#f0f0e8",
				display: "flex",
				flexDirection: "center",
				justifyContent: "center",
				alignItems: "center",
				pt: "50px",
				pb: "50px",
				pl: isMobile ? "20px" : "50px",
				pr: isMobile ? "20px" : "50px",
			}}
		>
			{isMobile ? <MobileAbout /> : <DesktopAbout />}
		</Box>
	);
};

export default About;
