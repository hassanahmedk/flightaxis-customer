import React from "react";
import FormControl from "@mui/material/FormControl";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

import airports from "./airports.js";

function AutocompleteAirports(props) {
	const [searchedAirports, setSearchedAirports] = React.useState([]);
	const [optionsText, setOptionsText] = React.useState(
		"city, district or specific airport"
	);

	function getAirports(name) {
		return airports.filter((airport) =>
			airport.toLowerCase().includes(name.toLowerCase())
		);
	}

	function handleAirportsChange(event) {
		if (event.target.value.length) {
			let result = getAirports(event.target.value);
			if (result.length) {
				setSearchedAirports(result);
			} else {
				setOptionsText("Not found, please try different keywords");
			}
		} else {
			setSearchedAirports([]);
			setOptionsText("city, district or specific airport");
		}
	}
	return (
		<FormControl fullWidth sx={{overflow:"none"}}>
			<Autocomplete
				disablePortal={true}
				options={searchedAirports}
				sx={
					props.isMobile && props.width
						? { width: 230, m: 1 }
						: { width: "50%", m: 1 }
				}
				//sx={{ width: props.width, mr: 1 }}
				onChange={(event, value) => props.setValue(props.name, value)}
				noOptionsText={optionsText}
				label=" "
				inputProps={{ maxLength: 5 }}
				renderInput={(params) => (
					<TextField
						{...params}
						label={props.label}
						size={props.size}
						onChange={handleAirportsChange}
					/>
				)}
			/>
		</FormControl>
	);
}

export default AutocompleteAirports;
