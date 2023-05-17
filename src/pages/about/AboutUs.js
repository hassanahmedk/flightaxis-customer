import React from "react";
import BookWithUs from "../../components/bookwithus/BookWithUs";
import TrustedCustomers from "../../components/trustedcustomers/TrustedCustomers";
import About from "../../components/aboutus/About";

const AboutUs = ({ isMobile }) => {
	return (
		<>
			<About isMobile={isMobile} />
			<BookWithUs isMobile={isMobile} />
			<TrustedCustomers isMobile={isMobile} />
		</>
	);
};

export default AboutUs;
