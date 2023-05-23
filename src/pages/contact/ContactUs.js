import React from "react";
import BookWithUs from "../../components/bookwithus/BookWithUs";
import TrustedCustomers from "../../components/trustedcustomers/TrustedCustomers";
import ContactForm from "../../components/contactUs/ContactForm";

const ContactUs = ({ isMobile }) => {
	return (
		<>
			<ContactForm isMobile={isMobile} />
			<BookWithUs isMobile={isMobile} />
			<TrustedCustomers isMobile={isMobile} />
		</>
	);
};

export default ContactUs;
