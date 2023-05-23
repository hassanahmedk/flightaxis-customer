import React, { useState } from "react";
import { IconButton, Paper, Stack } from "@mui/material";
import FaForm from "./fa-components/FaForm";
import FaAdress from "./fa-components/FaAdress";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


const FormAddress = ({ isMobile }) => {
	const [booked, setBooked] = useState(false);

	return (
		<Paper elevation={2} sx={{ borderRadius: "10px", overflow: "hidden" }}>
			{
					booked ? 
				<div style={{
					display:"flex",
					 flexDirection:"column",
					 alignItems:"center",
					 gap:"1rem",
					 margin:"2rem"
				}}>
				<CheckCircleIcon sx={{fontSize:"5rem", color:"green"}}/>
				<div style={{
					display:"flex",
					 flexDirection:"column",
					 alignItems:"center"}}>
					
				<h2> 
					
					Message received
					
				</h2>	
					<p>We'll get back to you on your email or phone</p>
				</div>
				</div>
				:
			<Stack direction={isMobile ? "column" : "row"}>
				<FaForm showSuccess={()=>setBooked(true)} isMobile={isMobile} />
				<FaAdress isMobile={isMobile} />
			</Stack>
		}
		</Paper>
	);
};

export default FormAddress;
