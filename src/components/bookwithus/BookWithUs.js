import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";

const BookWithUs = ({ isMobile }) => {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        pt: "50px",
        pb: "50px",
      }}
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
        ></Box>
        <Typography
          variant={isMobile ? "h5" : "h3"}
          textAlign="center"
          sx={{ width: "100%" }}
        >
          Why book with us?
        </Typography>

        <Box
          sx={{
            background: "#36bdf1",
            height: "10px",
            borderTopLeftRadius: "10px",
            borderBottomLeftRadius: "10px",
            width: "100%",
          }}
        ></Box>
      </Stack>
      <Grid
        container
        spacing={isMobile ? 5 : 3}
        justifyContent="center"
        sx={{ mt: "30px" }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            spacing={1}
            maxWidth="200px"
          >
            <img src="/images/wallet.png" alt="" width="110px" height="110px" />
            <Typography
              sx={{
                fontSize: "1.3rem",
                textAlign: "center",
                marginTop: "0.5rem",
                fontWeight: "500",
              }}
              variant="h4"
            >
              Book with Initial Deposit
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ fontSize: "11px", textAlign: "center" }}
            >
              Secure your trip with an initial deposit and enjoy flexible
              payment options to help plan and budget for your travel needs
            </Typography>
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            spacing={1}
            maxWidth="200px"
          >
            <img
              src="/images/booking-process.png"
              alt="booking"
              width="110px"
              height="110px"
            />
            <Typography
              sx={{
                fontSize: "1.3rem",
                textAlign: "center",
                marginTop: "0.5rem",
                fontWeight: "500",
              }}
              variant="h4"
            >
              Easy Booking Process
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ fontSize: "11px", textAlign: "center" }}
            >
              Simplify your travel planning with our user-friendly website and
              expert travel agents available to provide guidance
            </Typography>
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            spacing={1}
            maxWidth="200px"
          >
            <img
              src="/images/travel-agents.png"
              alt="agents"
              width="110px"
              height="110px"
            />
            <Typography
              sx={{
                fontSize: "1.3rem",
                textAlign: "center",
                marginTop: "0.5rem",
                fontWeight: "500",
              }}
              variant="h4"
            >
              Expert Travel Agents
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ fontSize: "11px", textAlign: "center" }}
            >
              Let our passionate travel agents with extensive knowledge help you
              plan the perfect trip tailored to your needs and preferences
            </Typography>
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            spacing={1}
            maxWidth="200px"
          >
            <img
              src="/images/24-7-support.png"
              alt="24/7"
              width="110px"
              height="110px"
            />
            <Typography
              sx={{
                fontSize: "1.3rem",
                textAlign: "center",
                marginTop: "0.5rem",
                fontWeight: "500",
              }}
              variant="h4"
            >
              24/7 Support
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ fontSize: "11px", textAlign: "center" }}
            >
              We pride ourselves on exceptional customer service with
              round-the-clock assistance for all your travel needs
            </Typography>
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            spacing={1}
            maxWidth="200px"
          >
            <img
              src="/images/security.png"
              alt="security"
              width="110px"
              height="110px"
            />
            <Typography
              sx={{
                fontSize: "1.3rem",
                textAlign: "center",
                marginTop: "0.5rem",
                fontWeight: "500",
              }}
              variant="h4"
            >
              Safety&Security
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ fontSize: "11px", textAlign: "center" }}
            >
              Your safety and security are our top priority with trusted
              partners and providers ensuring a safe and secure trip
            </Typography>
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            spacing={1}
            maxWidth="200px"
          >
            <img
              src="/images/trust-and-privacy.png"
              alt="trust"
              width="110px"
              height="110px"
            />
            <Typography
              sx={{
                fontSize: "1.3rem",
                textAlign: "center",
                marginTop: "0.5rem",
                fontWeight: "500",
              }}
              variant="h4"
            >
              Trust&Privacy
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ fontSize: "11px", textAlign: "center" }}
            >
              We value your privacy and maintain strict confidentiality of
              personal information, earning your trust for a secure and
              hassle-free booking experience
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default BookWithUs;
