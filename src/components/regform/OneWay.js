import React, { useState } from "react";
import { Button, FormControl, Grid, MenuItem, Select, Stack, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AutocompleteAirports from "./AutocompleteAirports";

const OneWay = ({ isMobile }) => {

	const [formData, setFormData] = useState({
		leaving_from: "",
		going_to: "",
		departing_on: "",
		adults: "",
		kids: "",
		infants: "",
	  });

	const navigate = useNavigate();

	const goToSearch = () => {
		if(Object.values(formData).some(value => value === '')){
			alert("Please fill in all the fields")
		  } else {
		navigate("/flights-loader", { state: { formData:formData, type:"one-way" }  });
		  }
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
	  const handleAirportChange = (name, value) => {
		console.log(name);
		setFormData((prev) => {
		  return {
			...prev,
			[name]: value,
		  };
		});
	  };

	  return (
		<div
		  container
		  spacing={1}
		  style={{ display: "flex", justifyContent: "center" }}
		>
		  <div style={isMobile ? {display:"flex", flexDirection:"column", alignItems:"center", gap:"1rem",     width: "100%"}:{display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1rem"}}>
		  <div>
			<Typography variant="h6" sx={{ fontWeight: "bold" }}>
			  From
			</Typography>
			<AutocompleteAirports
			  setValue={handleAirportChange}
			  name="leaving_from"
			  label="Leaving from"
			  width="100%"
			/>
		  </div>
		  <div>
			<Typography variant="h6" sx={{ fontWeight: "bold" }}>
			  To
			</Typography>
			<AutocompleteAirports
			  setValue={handleAirportChange}
			  name="going_to"
			  label="Going to"
			  width="100%"
			/>
		  </div>
		  <div>
			<Typography variant="h6" sx={{ fontWeight: "bold" }}>
			  Departing
			</Typography>
			<TextField
			  id="outlined-start-adornment"
			  size="large"
			  type="date"
			  sx={
				isMobile
				  ? {
					  m: 1,
					  /*height: "10vh", */
					  "& input::placeholder": {
						fontSize: "11px",
					  },
					}
				  : {
					  m: 1,
					  //width: "10vw",
					  /*height: "10vh", */
					  "& input::placeholder": {
						fontSize: "11px",
					  },
					  width:"100%"
					}
			  }
			  name="departing_on"
			  value={formData.departing_on}
			  onChange={handleFormChange}
			/>
		  </div>
		  
		  <div style={isMobile ? {display:"flex", justifyContent:"center", flexDirection:"column",gap:"2rem", gridColumn:"1 / span 2"} : {display:"flex", justifyContent:"center", gap:"2rem", gridColumn:"1 / span 2"}}>
			<FormControl fullWidth sx={{diplay:"flex", flexDirection:"column"}}>
			<Typography variant="h6" sx={{ fontWeight: "bold" }}>
			  Adults
			</Typography>
			  <Select
				labelId="demo-simple-select-label"
				id="demo-simple-select"
				name="adults"
				// sx={isMobile && {width:"150%"}}
				value={formData.adults}
				onChange={handleFormChange}
			  >
				<MenuItem  selected value={1}>
				  1
				</MenuItem>
				<MenuItem value={2}>2</MenuItem>
				<MenuItem value={3}>3</MenuItem>
				<MenuItem value={4}>4</MenuItem>
				<MenuItem value={5}>5</MenuItem>
				<MenuItem value={6}>6</MenuItem>
				<MenuItem value={7}>7</MenuItem>
				<MenuItem value={8}>8</MenuItem>
				<MenuItem value={9}>9</MenuItem>
			  </Select>
			</FormControl>
		  
			<FormControl fullWidth sx={{diplay:"flex", flexDirection:"column"}}>
			  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
				Kids
			  </Typography>
			  <Select
				labelId="demo-simple-select-label"
				id="demo-simple-select"
				name="kids"
				value={formData.kids}
				onChange={handleFormChange}
				// sx={isMobile && {width:"150%"}}
			  >
				<MenuItem selected value={0}>
				  0
				</MenuItem>
				<MenuItem value={1}>1</MenuItem>
				<MenuItem value={2}>2</MenuItem>
				<MenuItem value={3}>3</MenuItem>
				<MenuItem value={4}>4</MenuItem>
				<MenuItem value={5}>5</MenuItem>
				<MenuItem value={6}>6</MenuItem>
				<MenuItem value={7}>7</MenuItem>
				<MenuItem value={8}>8</MenuItem>
				<MenuItem value={9}>9</MenuItem>
			  </Select>
			</FormControl>
		  
			<FormControl fullWidth sx={{diplay:"flex", flexDirection:"column"}}>
			  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
				Infants
			  </Typography>
			  <Select
				labelId="demo-simple-select-label"
				id="demo-simple-select"
				name="infants"
				value={formData.infants}
				onChange={handleFormChange}
				// sx={isMobile && {width:"150%"}}
			  >
				<MenuItem selected value={0}>
				  0
				</MenuItem>
				<MenuItem selected value={1}>
				  1
				</MenuItem>
				<MenuItem value={2}>2</MenuItem>
				<MenuItem value={3}>3</MenuItem>
				<MenuItem value={4}>4</MenuItem>
				<MenuItem value={5}>5</MenuItem>
				<MenuItem value={6}>6</MenuItem>
				<MenuItem value={7}>7</MenuItem>
				<MenuItem value={8}>8</MenuItem>
				<MenuItem value={9}>9</MenuItem>
			  </Select>
			</FormControl>
		  </div>
		  <div style={isMobile ? {justifySelf:"center", marginTop:"1rem"} : {gridColumn:"1 / span 2", justifySelf:"center", marginTop:"1rem"}}>
			<Button
			  variant="contained"
			  sx={{
				background: "rgb(70,174,247)",
				background:
				  "radial-gradient(circle, rgba(70,174,247,1) 0%, rgba(29,213,230,1) 100%)",
	
				color: "#FFF",
				mb: "10px",
			  }}
			  onClick={goToSearch}
			>
			  Search For Best Flights
			</Button>{" "}
		  </div>
		  </div>
		</div>
	  );
};

export default OneWay;
