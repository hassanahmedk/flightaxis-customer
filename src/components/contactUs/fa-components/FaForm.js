import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { sendMessage } from "../../../assets/api/api";

const FaForm = ({ isMobile }) => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
		date: "",
	});

	const handleSubmit = () => {
		setFormData((prev) => {
			return {
				...prev,
				date: new Date()
					.toLocaleString("en-US", {
						hour: "2-digit",
						minute: "2-digit",
						month: "2-digit",
						day: "2-digit",
						year: "numeric",
					})
					.replace(",", " -"),
			};
		});
		sendMessage(formData)
			.then((result) => {
				window.alert("Message Sent!");
				console.log("Message sent");
			})
			.catch((error) => {
				window.alert("Error" + error);
				console.log("An error occured");
				console.log(error);
			});
	};

	const handleFormChange = (event) => {
		const { name, value } = event.target;
		setFormData((prev) => {
			return {
				...prev,
				[name]: value,
			};
		});
	};

	return (
		<Box>
			<Stack
				direction="column"
				justifyContent="flex-start"
				alignItems="center"
				spacing={2}
				sx={{ p: isMobile ? "20px" : "40px", pt: "40px" }}
			>
				<Typography
					variant={isMobile ? "h5" : "h3"}
					textAlign="center"
					fontWeight="bold"
				>
					Send us a Message
				</Typography>
				<Grid
					container
					rowSpacing={isMobile ? 4 : 8}
					columnSpacing={isMobile ? 0 : 6}
					sx={{ maxWidth: "60vw" }}
				>
					<Grid item xs={12} md={6}>
						<TextField
							name="name"
							value={formData.name}
							id="fullname"
							label="Full Name"
							variant="outlined"
							size="small"
							sx={{ width: "100%" }}
							onChange={handleFormChange}
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField
							name="email"
							value={formData.email}
							id="email"
							label="Email Address"
							type="email"
							variant="outlined"
							size="small"
							sx={{ width: "100%" }}
							onChange={handleFormChange}
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField
							name="phone"
							value={formData.phone}
							id="phone"
							label="Phone Number"
							type="number"
							variant="outlined"
							size="small"
							sx={{ width: "100%" }}
							onChange={handleFormChange}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							name="message"
							value={formData.message}
							id="message"
							label="Type Message Here"
							multiline
							minRows={7}
							sx={{ width: "100%" }}
							onChange={handleFormChange}
						/>
					</Grid>
					<Grid
						item
						xs={12}
						sx={{
							display: "flex",
							justifyContent: isMobile ? "center" : "flex-end",
							alignItem: "center",
						}}
					>
						<Button
							variant="contained"
							sx={{
								textTransform: "none",
								fontSize: "20px",
								borderRadius: "10px",
							}}
							onClick={handleSubmit}
						>
							Send a Message
						</Button>
					</Grid>
				</Grid>
			</Stack>
		</Box>
	);
};

export default FaForm;
