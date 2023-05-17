import { Box } from "@mui/material";
import React from "react";

const Plane = ({ isMobile }) => {
	return (
		<Box
			maxWidth="xl"
			sx={{
				backgroundImage: "url('/images/plane-runway.png')",
				backgroungSize: isMobile ? "20% 20%" : "100% 100%",
				backgroundRepeat: "no-repeat",
				backgroundAttachment: "fixed",
				backgroundPosition: "center",
				height: isMobile ? "320px" : "490px",
				p: isMobile ? "10px" : "50px",
				display: "flex",
				justifyContent: isMobile ? "center" : "flex-end",
				alignItems: isMobile ? "center" : "flex-start",
			}}
		>
			<img
				src="/images/booking-or-call.png"
				alt="book"
				style={{ marginRight: isMobile ? 0 : "70px" }}
			/>
		</Box>
	);
};

export default Plane;
