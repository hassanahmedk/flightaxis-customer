import { Routes, Route } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Header from "./components/Header/Header";
import Home from "./pages/home/Home";
import Footer from "./components/Footer/Footer";
import AboutUs from "./pages/about/AboutUs";
import ContactUs from "./pages/contact/ContactUs";
import TermsAndConditions from "./pages/terms-and-conditions/TermsAndConditions";
import SearchResultsRoundTrip from "./pages/search-results/SearchResultsRoundTrip";
import SearchResultsOneWay from "./pages/search-results/SearchResultsOneWay";
import Summary from "./pages/summary/Summary";
import Loader from "./pages/loader/Loader";

function App() {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down(768));
	return (
		<>
			<Header isMobile={isMobile} />
			<Routes>
				<Route path="/" element={<Home isMobile={isMobile} />} />
				<Route path="/about-us" element={<AboutUs isMobile={isMobile} />} />
				<Route path="/contact-us" element={<ContactUs isMobile={isMobile} />} />
				<Route
					path="/terms-and-conditions"
					element={<TermsAndConditions isMobile={isMobile} />}
				/>
				<Route
					path="/search-results-round-trip"
					element={<SearchResultsRoundTrip isMobile={isMobile} />}
				/>
				<Route
					path="/search-results-one-way"
					element={<SearchResultsOneWay isMobile={isMobile} />}
				/>
				<Route path="/summary" element={<Summary isMobile={isMobile} />} />
				<Route path="/flights-loader" element={<Loader />} />
			</Routes>
			<Footer isMobile={isMobile} />
		</>
	);
}

export default App;