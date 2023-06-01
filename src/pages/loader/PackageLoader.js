import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getFlights } from "../../assets/api/api";
import loadingGif from "../../assets/loader/flight-loader.gif";
import loadingVid from "../../assets/loader/flight-video.gif";

function PackageLoader() {
	const navigate = useNavigate();
	const { state } = useLocation();

    let city = state.city;

	useEffect(() => {
		window.scrollTo(0, 0);
        navigate("/destination", {
            state: { city },
          });
	}, []);

	return (
		<div
			style={{
				backgroundColor: "#fff",
				height: "80vh",
				width: "100vw",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<h3 style={{ color: "#101100", fontSize: "2rem", fontWeight: "400" }}>
				We are searching best packages for you...
			</h3>
		
		</div>
	);
}

export default PackageLoader;
