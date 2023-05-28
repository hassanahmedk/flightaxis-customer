import { Box, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import TicketDetails from "./TicketDetails";
import PersonDetails from "./PersonDetails";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const FlightSummary = ({ isMobile, details }) => {
  const [booked, setBooked] = useState(false);
  useEffect(()=>window.scrollTo(0, 0)
  , [])
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        pt: "40px",
        pb: "40px",
        background: "#F1F6F9",
      }}
    >
      <Paper
        elevation={2}
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "center",
          alignItems: "stretch",
          borderRadius: "10px",
          overflow: "hidden",
          gap: "30px",
          width: "90vw",
        }}
      >
        {booked ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
              width: "100%",
              margin: "2rem 0",
              justifyContent: "center",
              textAlign: "text",
            }}
          >
            <CheckCircleIcon sx={{ fontSize: "5rem", color: "green" }} />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "text",
                margin: "1rem",
              }}
            >
              <h2>Thank you</h2>
              <p>
                One of our customer representative will get in touch with you
                shortly
              </p>
            </div>
          </div>
        ) : (
          <>
            <TicketDetails details={details} isMobile={isMobile} />

            <PersonDetails
              setBooked={() => {
                setBooked(true);
              }}
              details={details}
              isMobile={isMobile}
            />
          </>
        )}
      </Paper>
    </Box>
  );
};

export default FlightSummary;
