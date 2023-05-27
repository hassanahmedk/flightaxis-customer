
import { Box, Typography, Stack, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { sendBooking } from "../../assets/api/api";

const PersonDetails = ({ details, isMobile, setBooked }) => {
	const [formData, setFormData] = useState({
		name: "",
		customer_email: "",
		customer_phone: "",
		side_notes: " ",
	});

	const handleFormChange = (event) => {
		const { name, value } = event.target;
		setFormData((prev) => {
			return {
				...prev,
				[name]: value,
			};
		});
	};

	console.log(details);

	const handleBookingSubmit = () => {
		let trip_type = "Return";
		if (details.returning_on === null) {
			trip_type = "One-way";
		}

		if (Object.values(formData).some((value) => value === "")) {
			alert("Please fill in all the fields");
		} else {
			sendBooking({
				...formData,
				airline: details.airline,
				leaving_from: details.leaving_from,
				going_to: details.going_to,
				departing_on: details.departing_on,
				returning_on: details.returning_on,
				adults: details.adults,
				kids: details.kids,
				infants: details.infants,
				total_fare: details.fare,
				trip_type,
			})
				.then((result) => {
					setBooked()
					console.log(result)
					}
				     
				    )
				.catch((error) => alert("An error occured, try again"));
		}
	};

	return (
		<Box
			sx={{
				background: "#17a5f7aa",
				p: isMobile ? "10px" : "30px",
				display: "flex",
				flexDirection: "column",
				justifyContent: isMobile ? "center" : "flex-start",
				alignItems: isMobile ? "center" : "stretch",
				width: "100%",
				height: "inherit",
				color: "#ffff",
				gap: "30px",
				boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
			}}
		>
			<Typography variant="h4" textAlign="center">
				Your Information
			</Typography>
			<Stack direction="column" alignItems="stretch">
				<Typography variant="subtitle1" color="black">
					Name:
				</Typography>
				<TextField
					required
					placeholder="Full Name"
					size="small"
					InputProps={{
						style: {
							border: "2px solid #ffffff00",
							"&:focus": {
								borderColor: "blue",
							},
							"&:hover": {
								borderColor: "blue",
							},
						},
					}}
					sx={{
						"& input::placeholder": {
							fontSize: "15px",
							color: "white",
						},
					}}
					name="name"
					value={formData.name}
					onChange={handleFormChange}
				/>
			</Stack>

			<Stack direction="column" alignItems="stretch">
				<Typography variant="subtitle1" color="black">
					Email:
				</Typography>
				<TextField
					required
					placeholder="Email Address"
					size="small"
					type="email"
					InputProps={{
						style: {
							border: "2px solid #ffffff00",
							"&:focus": {
								borderColor: "blue",
							},
							"&:hover": {
								borderColor: "blue",
							},
						},
					}}
					sx={{
						"& input::placeholder": {
							fontSize: "15px",
							color: "white",
						},
					}}
					name="customer_email"
					value={formData.customer_email}
					onChange={handleFormChange}
				/>
			</Stack>
			<Stack direction="column" alignItems="stretch">
				<Typography variant="subtitle1" color="black">
					Phone Number:
				</Typography>
				<TextField
					required
					placeholder="Phone number"
					size="small"
					type="phone"
					InputProps={{
						style: {
							border: "2px solid #ffffff00",
							"&:focus": {
								borderColor: "blue",
							},
							"&:hover": {
								borderColor: "blue",
							},
						},
					}}
					sx={{
						"& input::placeholder": {
							fontSize: "15px",
							color: "white",
						},
					}}
					name="customer_phone"
					value={formData.customer_phone}
					onChange={handleFormChange}
				/>
			</Stack>
			<Stack direction="column" alignItems="stretch">
				<Typography variant="subtitle1" color="black">
					Side Notes: (Optional)
				</Typography>

				<TextField
					id="message"
					placeholder="Type Here"
					multiline
					minRows={isMobile ? 6 : 7}
					InputProps={{
						style: {
							border: "2px solid #ffffff00",
							"&:focus": {
								borderColor: "blue",
							},
							"&:hover": {
								borderColor: "blue",
							},
							width:isMobile ? "16.5rem" : "",
							marginLeft:isMobile ? "-0.8rem" : "",
						},
					}}
					name="side_notes"
					value={formData.side_notes}
					onChange={handleFormChange}
				/>
			</Stack>
			<Button
				onClick={handleBookingSubmit}
				variant="contained"
				sx={{ mt: isMobile ? 1 : 5 }}
			>
				<Typography
					variant="p"
					fontFamily="Poppins"
					sx={{ color: "#fff", fontSize: "1.2rem" }}
				>
					Confirm booking
				</Typography>
			</Button>
		</Box>
	);
};

export default PersonDetails;
