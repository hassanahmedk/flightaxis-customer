import React from "react";
import { useLocation } from "react-router-dom";
import FlightSummary from "../../components/flight-summary/FlightSummary";

const Summary = ({ isMobile }) => {
	const { state } = useLocation();

	console.log("here:" + state.formData);
	return <FlightSummary
		details={state}
		isMobile={isMobile}
	 />;
};

export default Summary;
