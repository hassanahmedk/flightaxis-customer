import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import FormAddress from "./Form-Address";

const ContactForm = ({ isMobile }) => {

	return (
		<Box sx={{ background: "#f0f0e8", pt: "30px", pb: "50px" }}>
			<Stack
				direction="column"
				justifyContent="center"
				alignItems="center"
				spacing={isMobile ? 5 : 9}
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
						variant={isMobile ? "h5" : "h3"}
						textAlign="center"
						sx={{ width: "100%" }}
					>
						Contact Us
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
				<FormAddress isMobile={isMobile} />
			</Stack>
		</Box>
	);
};

export default ContactForm;
