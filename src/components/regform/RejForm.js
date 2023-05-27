import React from "react";
import PropTypes from "prop-types";
import {
	Box,
	Container,
	Paper,
	Typography,
	Tabs,
	Tab,
	Stack,
	FormControl,
} from "@mui/material";
import Round from "./Round";
import OneWay from "./OneWay";

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && <Box sx={{ p: 3 }}>{children}</Box>}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

const RejForm = ({ isMobile }) => {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<Container
			maxWidth="xl"
			sx={{
				position: "relative",
				height: isMobile ? "130vh" : "250px",
				zIndex: "30",
				display: "flex",
				flexDirection: "column",
				justifyContent: "flex-start",
				alignItems: "center",
				mt: "10px",
				p: "10px",
			}}
		>
			<Stack
				direction="column"
				justifyContent="center"
				alignItems="center"
				sx={{
					position: isMobile ? "relative" : "absolute",
					top: isMobile ? "none" : -180,
				}}
			>
				<Box
					sx={{
						width: isMobile ? "90vw" : "85vw",
						height: "45px",
						backgroundColor: "rgb(0,0,0)",
						opacity: 0.7,
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						gap: isMobile ? "1px" : "20px",
						borderTopRightRadius: "10px",
						borderTopLeftRadius: "10px",
					}}
				>
					<img
						src="/images/flight-icon.png"
						alt="flight-icon"
						width={isMobile ? "27vw" : "30vw"}
						style={{ marginLeft: "5px" }}
					/>
					<Typography
						variant={isMobile ? "subtitle2" : "h6"}
						sx={{ color: "white", fontFamily: "MV Boli" }}
						textAlign="center"
					>
						Take off with us towards your next adventure
					</Typography>
				</Box>
				<Paper
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "flex-start",
						alignItems: "center",
						width: isMobile ? "90vw" : "85vw",
						overflow: "hidden",
						borderRadius: "10px",
						minHeight: isMobile ? (value === 0 ? "120vh" : "110vh") : "50vh",
						background: "#f0f0e8",
						borderTopRightRadius: 0,
						borderTopLeftRadius: 0,
					}}
				>
					<Box
						sx={{
							width: "100%",
							height: "50px",
							ml: "35px",
							p: "20px",
							display: "flex",
							flexDirection: "column",
							pr: "30px",
						}}
					>
						<Tabs
							value={value}
							onChange={handleChange}
							TabIndicatorProps={{
								style: {
									background: "none",
								},
							}}
							sx={{ ml: "20px" }}
							aria-label="Ticket Type"
						>
							<Tab
								label="Round Trip"
								{...a11yProps(0)}
								sx={{
									"&.Mui-selected": {
										background:
											"radial-gradient(circle, rgba(70,174,247,1) 0%, rgba(29,213,230,1) 100%)",

										color: "#FFF",
										borderRadius: "10px",
									},
									color: "#46aef7",
									fontSize: "12px",
								}}
							/>
							<Tab
								label="One Way"
								{...a11yProps(1)}
								sx={{
									"&.Mui-selected": {
										background:
											"radial-gradient(circle, rgba(70,174,247,1) 0%, rgba(29,213,230,1) 100%)",

										color: "#FFF",
										borderRadius: "10px",
									},
									color: "#46aef7",
									fontSize: "12px",
								}}
							/>
						</Tabs>
						<TabPanel value={value} index={0}>
							<FormControl fullWidth>
								<Round isMobile={isMobile} />
							</FormControl>
						</TabPanel>
						<TabPanel value={value} index={1}>
							<FormControl fullWidth>
								<OneWay isMobile={isMobile} />
							</FormControl>
						</TabPanel>
					</Box>
				</Paper>
			</Stack>
		</Container>
	);
};

export default RejForm;
