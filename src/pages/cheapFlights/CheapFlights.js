import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getPackages } from "../../assets/api/api";
import PackageBookDialog from "../../components/package-summary/PackageBookDIalog";

const CheapFlights = () => {
  const navigate = useNavigate();

  const { state } = useLocation();
  const [city, setCity] = useState(state.city);

  const [fromCities, setFromCities] = useState([
    { name: "Birmingham", flights: [] },
    { name: "Edinburgh", flights: [] },
    { name: "Glasgow", flights: [] },
    { name: "London Gatwick", flights: [] },
    { name: "London Heathrow", flights: [] },
    { name: "Manchester", flights: [] },
    { name: "Newcastle", flights: [] },
  ]);
  let airlines = [
    "Air France",
    "KLM",
    "Lufthansa",
    "Qatar Airways",
    "Virgin Atlantic",
    "Royal Air Maroc",
    "British Airways",
    "Ryan air",
  ];

  useEffect(() => {
    setCity(state.city);
    getPackages(city).then((result) => {
      console.log(result);
      let temp = fromCities;
      result.filter((flight) => {
        if (flight.leaving_from === "Birmingham") {
          temp[0].flights.push(flight);
        } else if (flight.leaving_from === "Edinburgh") {
          temp[1].flights.push(flight);
        } else if (flight.leaving_from === "Glasgow") {
          temp[2].flights.push(flight);
        } else if (flight.leaving_from === "London Gatwick") {
          temp[3].flights.push(flight);
        } else if (flight.leaving_from === "London Heathrow") {
          temp[4].flights.push(flight);
        } else if (flight.leaving_from === "Manchester") {
          temp[5].flights.push(flight);
        } else if (flight.leaving_from === "Newcastle") {
          temp[6].flights.push(flight);
        }
        return flight;
      });
      setFromCities(() => {
        return [...temp];
      });
    });
  }, []);


  const [open, setOpen] = useState(false);
  const [data, setData] = useState();
  

  return (
    <>
    <PackageBookDialog data={data} label="destination" open={open} setOpen={setOpen}/>
      {fromCities.map((fromCity) => {
        return (
          <Container
            maxWidth="md"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "30px",
              p: 4,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "stretch",
                gap: "30px",
              }}
            >
              <Paper
                elevation={2}
                sx={{ p: 2, background: "#76cfde", minWidth: "60vw" }}
              >
                <Typography variant="h5" textAlign="center">
                  Cheap flights to {city} from {fromCity.name}
                </Typography>
              </Paper>
              <Grid
                container
                spacing={2}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {fromCity.flights.map((flight) => {
                  return (
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Stack
                        sx={{
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr 1fr",
                        }}
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                      >
                        <img
                          src={
                            "/images/airlines/" +
                            flight.airline.split(" ")[0] +
                            ".png"
                          }
                          alt="flight-icon"
                          width="100px"
                        />
                        <Typography variant="h5">
                          £{flight.total_fare}
                        </Typography>
                        <Button
                          variant="contained"
                          sx={{
                            background:
                              "radial-gradient(circle, rgba(70,174,247,1) 0%, rgba(29,213,230,1) 100%)",
                            color: "#FFF",
                            borderRadius: "5px",
                          }}
                          onClick={() => {
                            setData(flight)
                            setOpen(true)
                          }}
                        >
                          Book Now
                        </Button>
                      </Stack>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          </Container>
        );
      })}
    </>
  );
};

export default CheapFlights;
