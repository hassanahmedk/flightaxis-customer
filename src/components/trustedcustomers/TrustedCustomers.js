import {
	Avatar,
	Box,
	Divider,
	Grid,
	Paper,
	Rating,
	Stack,
	Typography,
} from "@mui/material";
import React from "react";

const TrustedCustomers = ({ isMobile }) => {
	return (
		<Stack
			direction="column"
			justifyContent="center"
			alignItems="center"
			sx={{ pt: "55px", pb: "55px", background: "#F1F6F9" }}
		>
			<Stack
				direction="row"
				justifyContent={"center"}
				alignItems="center"
				sx={{ width: "100%" }}
			>
				<Box
					sx={{
						background: "#36bdf1",
						height: "10px",
						borderTopRightRadius: "10px",
						borderBottomRightRadius: "10px",
						width: "100%",
					}}
				/>
				<Typography
					variant={isMobile ? "h6" : "h4"}
					textAlign="center"
					sx={{ width: "100%" }}
				>
					Our Trusted Customers
				</Typography>
				<Box
					sx={{
						background: "#36bdf1",
						height: "10px",
						borderTopLeftRadius: "10px",
						borderBottomLeftRadius: "10px",
						width: "100%",
					}}
				/>
			</Stack>
			<Grid
				container
				justifyContent="center"
				spacing={isMobile ? 5 : 0}
				sx={{ mt: "40px" }}
			>
				<Grid
					item
					xs={12}
					sm={12}
					md={4}
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Paper
						elevation={7}
						sx={{
							width: "360px",
							height: "280px",
							background: "#8accf2",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							position: "relative",
							borderRadius:"6px"
						}}
					>
						<Avatar
							alt="rater"
							sx={{
								width: "75px",
								height: "75px",
								position: "absolute",
								top: 20,
								zIndex: 10,
							}}
						/>
						<Paper
							sx={{
								background: "#17a5f7",
								width: "300px",
								height: "170px",
								position: "absolute",
								bottom: 15,
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
								gap: "5px",
								p: "10px",
								borderRadius:"4px"
							}}
						>
							<Typography variant="subtitle1" sx={{ color: "white" }}>
								Naveed
							</Typography>
							<Divider
								sx={{ width: "90%", background: "#fec408", height: "2px" }}
							/>
							<Rating
								name="rating"
								value={5}
								readOnly
								sx={{ color: "#ffd006" }}
							/>
							<Typography
								variant="subtitle2"
								sx={{ fontSize: "12px", textAlign: "center", color: "white" }}
							>
								" This travel agency website exceeded my expectations with their
								easy booking process and expert travel agents who provided
								exceptional support and guidance. "
							</Typography>
						</Paper>
					</Paper>
				</Grid>
				<Grid
					item
					xs={12}
					sm={12}
					md={4}
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Paper
						elevation={7}
						sx={{
							width: "360px",
							height: "280px",
							background: "#8accf2",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							position: "relative",
							borderRadius:"6px"
						}}
					>
						<Avatar
							alt="rater"
							sx={{
								width: "75px",
								height: "75px",
								position: "absolute",
								top: 20,
								zIndex: 10,
							}}
						/>
						<Paper
							sx={{
								background: "#17a5f7",
								width: "300px",
								height: "170px",
								position: "absolute",
								bottom: 15,
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
								gap: "5px",
								p: "10px",
								borderRadius:"4px"
							}}
						>
							<Typography variant="subtitle1" sx={{ color: "white" }}>
								Naveed
							</Typography>
							<Divider
								sx={{ width: "90%", background: "#fec408", height: "2px" }}
							/>
							<Rating
								name="rating"
								value={5}
								readOnly
								sx={{ color: "#ffd006" }}
							/>
							<Typography
								variant="subtitle2"
								sx={{ fontSize: "12px", textAlign: "center", color: "white" }}
							>
								" This travel agency website exceeded my expectations with their
								easy booking process and expert travel agents who provided
								exceptional support and guidance. "
							</Typography>
						</Paper>
					</Paper>
				</Grid>
				<Grid
					item
					xs={12}
					sm={12}
					md={4}
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Paper
						elevation={7}
						sx={{
							width: "360px",
							height: "280px",
							background: "#8accf2",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							position: "relative",
							borderRadius:"6px"
						}}
					>
						<Avatar
							alt="rater"
							sx={{
								width: "75px",
								height: "75px",
								position: "absolute",
								top: 20,
								zIndex: 10,
							}}
						/>
						<Paper
							sx={{
								background: "#17a5f7",
								width: "300px",
								height: "170px",
								position: "absolute",
								bottom: 15,
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
								gap: "5px",
								p: "10px",
								borderRadius:"4px"
							}}
						>
							<Typography variant="subtitle1" sx={{ color: "white" }}>
								Naveed
							</Typography>
							<Divider
								sx={{ width: "90%", background: "#fec408", height: "2px" }}
							/>
							<Rating
								name="rating"
								value={5}
								readOnly
								sx={{ color: "#ffd006" }}
							/>
							<Typography
								variant="subtitle2"
								sx={{ fontSize: "12px", textAlign: "center", color: "white" }}
							>
								" This travel agency website exceeded my expectations with their
								easy booking process and expert travel agents who provided
								exceptional support and guidance. "
							</Typography>
						</Paper>
					</Paper>
				</Grid>
			</Grid>
		</Stack>
	);
};

export default TrustedCustomers;
