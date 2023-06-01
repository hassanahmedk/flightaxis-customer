import React from "react";
import { useLocation } from "react-router-dom";
import PackageSummary from "../../components/package-summary/PackageSummary";

const PackageSummaryPage = ({ isMobile }) => {
	const { state } = useLocation();

	console.log(state.flight);
	return <PackageSummary
		details={state.flight}
		isMobile={isMobile}
	 />;
	
};

export default PackageSummaryPage;
