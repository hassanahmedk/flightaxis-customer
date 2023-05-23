import { Box, Paper } from "@mui/material";
import React, { useState } from "react";
import TicketDetails from "./TicketDetails";
import PersonDetails from "./PersonDetails";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


const FlightSummary = ({ isMobile, details }) => {
	const [booked, setBooked] = useState(false);
	return (
		<Box
			sx={{
				width: "100%",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				pt: "40px",
				pb: "40px",
			}}
		>
			<Paper
				elevation={2}
				sx={{
					display: "flex",
					flexDirection: isMobile ? "column" : "row",
					justifyContent: "center",
					alignItems: "stretch",
					borderRadius: "10px",
					overflow: "hidden",
					background: "#F1F6F9",
					gap: "30px",
				}}
			>


				{
					booked ? 
				<div style={{
					display:"flex",
					 flexDirection:"column",
					 alignItems:"center",
					 width:"100vw",
					 gap:"1rem",
					 margin:"2rem 0"
				}}>
				<CheckCircleIcon sx={{fontSize:"5rem", color:"green"}}/>
				<div style={{
					display:"flex",
					 flexDirection:"column",
					 alignItems:"center"}}>
				<h2> 
					Booking request received
					
				</h2>	
					<p>We'll get back to you on your email or phone</p>
				</div>
				</div>
				:
				<> 
				<TicketDetails details={details} isMobile={isMobile} />
					
				<PersonDetails setBooked={()=>{
					setBooked(true);
				}} details={details} isMobile={isMobile} />
				</>
				}

			</Paper>
		</Box>
	);
};

export default FlightSummary;
