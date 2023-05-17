import React from "react";
import BookWithUs from "../../components/bookwithus/BookWithUs";
import TrustedCustomers from "../../components/trustedcustomers/TrustedCustomers";
import Places from "../../components/places/Places";
import Plane from "../../components/plane-pic/Plane";
import RejForm from "../../components/regform/RejForm";

const Home = ({ isMobile }) => {
	return (
		<>
			<Plane isMobile={isMobile} />
			<RejForm isMobile={isMobile} />
			<Places isMobile={isMobile} />
			<BookWithUs isMobile={isMobile} />
			<TrustedCustomers isMobile={isMobile} />
		</>
	);
};

export default Home;
