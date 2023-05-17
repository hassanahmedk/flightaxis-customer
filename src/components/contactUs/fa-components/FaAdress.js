import { Stack, Typography } from "@mui/material";
import React from "react";

const FaAdress = ({ isMobile }) => {
	return (
		<Stack
			direction="column"
			justifyContent="flex-start"
			alignItems="flex-start"
			sx={{
				p: "40px",
				background: "#41beba",
			}}
			spacing={isMobile ? 5 : 7}
		>
			<Typography
				variant={isMobile ? "h4" : "h3"}
				fontWeight="bold"
				sx={{ color: "white" }}
			>
				Info
			</Typography>
			<Stack direction="column" sx={{ color: "white" }} spacing={2}>
				<Typography variant="p">Kemp House, 160 city Road, London</Typography>
				<Typography variant="p">EC1V 2NX</Typography>
				<Typography variant="p">Landline 02032871426</Typography>
				<Typography variant="p">WhatsApp: +447441429600</Typography>
				<Typography variant="p">Support@flightaxis.co.uk</Typography>
			</Stack>
			<Stack
				direction="column"
				justifyContent="center"
				alignItems="flex-start"
				sx={{ color: "white", width: "100%", ml: "40px" }}
				spacing={2}
			>
				<Typography
					variant="p"
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						gap: "10px",
					}}
				>
					<img src="/images/Facebook.png" alt="facebook" width="30px" />
					Facebook
				</Typography>
				<Typography
					variant="p"
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						gap: "10px",
					}}
				>
					<img src="/images/Twitter.png" alt="facebook" width="30px" />
					Twitter
				</Typography>
				<Typography
					variant="p"
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						gap: "10px",
					}}
				>
					<img src="/images/Instagram.png" alt="facebook" width="30px" />
					Instagram
				</Typography>
			</Stack>
		</Stack>
	);
};

export default FaAdress;
