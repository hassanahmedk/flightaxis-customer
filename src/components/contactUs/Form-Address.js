import React from "react";
import { Paper, Stack } from "@mui/material";
import FaForm from "./fa-components/FaForm";
import FaAdress from "./fa-components/FaAdress";

const FormAddress = ({ isMobile }) => {
	return (
		<Paper elevation={2} sx={{ borderRadius: "10px", overflow: "hidden" }}>
			<Stack direction={isMobile ? "column" : "row"}>
				<FaForm isMobile={isMobile} />
				<FaAdress isMobile={isMobile} />
			</Stack>
		</Paper>
	);
};

export default FormAddress;
