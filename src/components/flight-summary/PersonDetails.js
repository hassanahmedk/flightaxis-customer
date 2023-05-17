import { Box, Typography, Stack, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { sendBooking } from "../../assets/api/api";

const PersonDetails = ({ details, isMobile, setBooked }) => {
	const [formData, setFormData] = useState({
		name:"",
		customer_email:"",
		customer_phone:"",
		total_fare:"",
		side_notes: "",
	})

	const handleFormChange = (event) => {
		const {name, value} = event.target;
		setFormData((prev)=>{
			return {
				...prev,
				[name]:value
			}
		})

	}

	console.log(details);

	const handleBookingSubmit = () => {
		sendBooking({
			...formData,
			leaving_from: details.leaving_from,
			going_to: details.going_to,
			adults: details.adults,
			kids: details.kids,
			infants: details.infants,
			total_fare: details.fare

		})
		.then((result)=>setBooked())
		.catch((error)=>alert("An error occured, try again"))
	}

	return (
		<Box
			sx={{
				background: "#17a5f7",
				p: "30px",
				display: "flex",
				flexDirection: "column",
				justifyContent: "flex-start",
				alignItems: "stretch",
				width: "100%",
				height: "inherit",
				color: "#ffff",
				gap: "30px",
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
						style: { border: "2px solid white" },
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
						style: { border: "2px solid white" },
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
						style: { border: "2px solid white" },
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
					minRows={7}
					InputProps={{
						style: { border: "2px solid white" },
					}}
					sx={{
						"& input::placeholder": {
							fontSize: "15px",
							color: "white",
						},
					}}
					name="side_notes"
					value={formData.side_notes}
					onChange={handleFormChange}
				/>
			</Stack>
			<Button onClick={handleBookingSubmit} variant="contained" sx={{ mt: 5 }}>
				<Typography variant="h5" fontFamily="Bahnschrift">
					Confirm booking
				</Typography>
			</Button>
		</Box>
	);
};

export default PersonDetails;
