import { useState } from "react";
import {
	AppBar,
	Box,
	Toolbar,
	IconButton,
	Typography,
	Menu,
	Container,
	MenuItem,
	Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";
import GetAQuoteDialog from "../getaquotedialog/GetAQuoteDialog";
import { useEffect } from "react";
import FlightsPopover from "../popover/FlightsPopover";

const Header = ({ isMobile }) => {
	const [anchorElNav, setAnchorElNav] = useState(null);

	const [open, setOpen] = useState(false);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const openQuote = () => {
		setOpen(true);
	};

	const [activePage, setActivePage] = useState("#fff");

	const location = useLocation();

	const [openPop, setOpenPop] = useState(false);

	const handleClickPop = (event) => {
		setOpenPop(true);
	};

	const handleClosePop = () => {
		setOpenPop(false);
	};

	useEffect(() => {
		setActivePage(location.pathname);
	}, [location.pathname]);

	return (
		<AppBar
			position="static"
			sx={{
				background: isMobile ? "#76cfde" : "transparent",
				height: "30vh",
				boxShadow: "none",
			}}
		>
			<Box
				sx={{
					height: isMobile ? "17vh" : "8vh",
					width: "100%",
					background: "rgb(0,0,0)",
					color: "#Fff",
					display: "flex",
					flexDirection: isMobile ? "column" : "row",
					justifyContent: isMobile ? "center" : "space-around",
					alignItems: "center",
					gap: "10px",
				}}
			>
				<Typography
					variant="subtitle2"
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						color: "#fff",
					}}
				>
					<img src="/images/message-icon.png" alt="message" width="25vw" />
					&nbsp; &nbsp; Support@flightaxis.co.uk
				</Typography>
				<Typography
					variant="subtitle1"
					sx={{ fontFamily: "MV Boli", color: "#fff" }}
				>
					We are open 24 Hours a Day, 7 Days a weak
				</Typography>
				<Typography
					variant="p"
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<img src="/images/call-icon.png" alt="message" width="25vw" />
					&nbsp; &nbsp; 02032871426
				</Typography>
			</Box>
			<Container maxWidth="xl" sx={{ p: "15px", pl: "20px" }}>
				<Toolbar>
					{/** Mobile View of Header **/}

					<Box sx={{ display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon fontSize="large" />
						</IconButton>
						<Typography
							variant="h5"
							component="div"
							noWrap
							sx={{
								display: { xs: "flex", md: "none" },
								fontFamily: "monospace",
								fontWeight: 700,
								letterSpacing: ".3rem",
								color: "inherit",
								textDecoration: "none",
								pl: "20px",
							}}
						>
							<img
								src="/images/flight-axis-logo.png"
								alt="logo"
								width="150vw"
							/>
						</Typography>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "right",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}
						>
							<MenuItem onClick={handleCloseNavMenu}>
								<Typography
									variant="body1"
									textAlign="center"
									sx={{
										display: "block",
										margin: "10px",
										textDecoration: "none",
									}}
								>
									<Link
										style={{ textDecoration: "none", color: "black" }}
										to="/"
									>
										Home
									</Link>
								</Typography>
							</MenuItem>
							<MenuItem onClick={handleCloseNavMenu}>
								<Typography
									variant="body1"
									textAlign="center"
									sx={{
										display: "block",
										margin: "10px",
										textDecoration: "none",
									}}
								>
									<Link
										style={{ textDecoration: "none", color: "black" }}
										to="/cheap-flights"
										onClick={handleClickPop}
									>
										Destinations
									</Link>
								</Typography>
							</MenuItem>
							<MenuItem onClick={handleCloseNavMenu}>
								<Typography
									variant="body1"
									sx={{
										display: "block",
										margin: "10px",
										textDecoration: "none",
									}}
									textAlign="center"
								>
									<Link
										to="/contact-us"
										style={{ textDecoration: "none", color: "black" }}
									>
										Contact Us
									</Link>
								</Typography>
							</MenuItem>
							<MenuItem onClick={handleCloseNavMenu}>
								<Typography
									variant="body1"
									sx={{
										display: "block",
										margin: "10px",
										textDecoration: "none",
									}}
									textAlign="center"
								>
									<Link
										style={{ textDecoration: "none", color: "black" }}
										to="/about-us"
									>
										About Us
									</Link>
								</Typography>
							</MenuItem>
							<MenuItem onClick={handleCloseNavMenu}>
								<Button variant="contained" onClick={openQuote}>
									Get a Quote
								</Button>
							</MenuItem>
						</Menu>
					</Box>

					{/** Desktop View of Header **/}

					<Typography
						variant="h6"
						component="h6"
						sx={{
							mr: 2,
							display: { xs: "none", md: "flex" },
						}}
					>
						<img
							src="/images/flight-axis-logo.png"
							alt="logo"
							width="350px"
							height="120px"
							style={{ marginLeft: "50px" }}
						/>
					</Typography>

					<Box
						sx={{
							width: "100%",
							display: { xs: "none", md: "flex" },
							justifyContent: "center",
						}}
					>
						<Box
							sx={{
								pl: "30px",
								pr: "30px",
								height: "90px",
								background: "#76cfde",
								borderRadius: "50px",
								display: "flex",
								flexDirection: "row",
								justifyContent: "center",
								alignItems: "center",
								gap: "20px",
							}}
						>
							<Typography
								variant="h6"
								component="p"
								onClick={handleCloseNavMenu}
								sx={{
									my: 2,
									color: "white",
									display: "block",
									margin: "10px",
									textDecoration: "none",
								}}
							>
								<Link
									style={{
										textDecoration: "none",
										color: activePage === "/" ? "#0f6bd7" : "#fff",
										fontFamily: "Poppins",
										"&:hover": {
											opacity: 0.9,
										},
									}}
									to="/"
								>
									Home
								</Link>
							</Typography>
							<Typography
								variant="h6"
								component="p"
								sx={{
									my: 2,
									display: "block",
									margin: "10px",
									textDecoration: "none",
									color: activePage === "/cheap-flights" ? "#0f6bd7" : "#fff",
									fontFamily: "Poppins",
									"&:hover": {
										opacity: 0.9,
									},
								}}
								onClick={handleClickPop}
							>
								Destinations
							</Typography>
							<FlightsPopover
								openPop={openPop}
								handleClickPop={handleClickPop}
								handleClosePop={handleClosePop}
							/>
							<Typography
								variant="h6"
								component="p"
								onClick={handleCloseNavMenu}
								sx={{
									my: 2,
									color: "white",
									display: "block",
									margin: "10px",
									textDecoration: "none",
								}}
							>
								<Link
									to="/contact-us"
									style={{
										textDecoration: "none",
										color: activePage === "/contact-us" ? "#0f6bd7" : "#fff",
										fontFamily: "Poppins",
										"&:hover": {
											opacity: 0.9,
										},
									}}
								>
									Contact Us
								</Link>
							</Typography>
							<Typography
								variant="h6"
								component="p"
								onClick={handleCloseNavMenu}
								sx={{
									my: 2,
									color: "white",
									display: "block",
									margin: "10px",
									textDecoration: "none",
								}}
							>
								<Link
									style={{
										textDecoration: "none",
										color: activePage === "/about-us" ? "#0f6bd7" : "#fff",
										fontFamily: "Poppins",
										"&:hover": {
											opacity: 0.9,
										},
									}}
									to="/about-us"
								>
									About Us
								</Link>
							</Typography>
							<Button
								variant="contained"
								onClick={openQuote}
								sx={{ borderRadius: "5px" }}
							>
								Get a Quote
							</Button>
						</Box>
					</Box>
				</Toolbar>
				<GetAQuoteDialog open={open} setOpen={setOpen} isMobile={isMobile} />
			</Container>
		</AppBar>
	);
};
export default Header;
