import React, { useState } from "react";
import { Button, Grid, Stack, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AutocompleteAirports from "./AutocompleteAirports";

const Round = ({ isMobile }) => {
  const [formData, setFormData] = useState({
    leaving_from: "",
    going_to: "",
    departing_on: "",
    returning_on: "",
    adults: "",
    kids: "",
    infants: "",
  });

  const navigate = useNavigate();

  const goToSearch = () => {
    navigate("/flights-loader", { state: { formData:formData }  });
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleAirportChange = (name, value) => {
    console.log(name);
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <Grid container spacing={1} >
      <Grid item xs={12} sm={12} md={4}>
        <Stack direction={"column"} justifyContent={"flex-start"}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            From
          </Typography>
          <AutocompleteAirports
            setValue={handleAirportChange}
            name="leaving_from"
            label="Leaving from"
          />
        </Stack>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <Stack direction={"column"} justifyContent={"flex-start"}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            To
          </Typography>
          <AutocompleteAirports
            setValue={handleAirportChange}
            name="going_to"
            label="Going to"
          />
        </Stack>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <Stack
          direction={isMobile ? "column" : "row"}
          justifyContent="flex-start"
          alignItems="center"
          sx={{ width: "100%" }}
        >
          <Stack
            direction={"column"}
            justifyContent={"flex-start"}
            sx={{ width: "100%" }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Departing
            </Typography>
            <TextField
              id="outlined-start-adornment"
              size="small"
              type="date"
              sx={
                isMobile
                  ? {
                      m: 1,
                      /*height: "10vh", */
                      "& input::placeholder": {
                        fontSize: "11px",
                      },
                    }
                  : {
                      m: 1,
                      //width: "10vw",
                      /*height: "10vh", */
                      "& input::placeholder": {
                        fontSize: "11px",
                      },
                    }
              }
              name="departing_on"
              value={formData.departing_on}
              onChange={handleFormChange}
            />
          </Stack>
          <Stack
            direction={"column"}
            justifyContent={"flex-start"}
            sx={{ width: "100%" }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Returning
            </Typography>
            <TextField
              id="outlined-start-adornment"
              size="small"
              type="date"
              sx={
                isMobile
                  ? {
                      m: 1,
                      /*height: "10vh", */
                      "& input::placeholder": {
                        fontSize: "11px",
                      },
                    }
                  : {
                      m: 1,
                      //width: "10vw",
                      /*height: "10vh", */
                      "& input::placeholder": {
                        fontSize: "11px",
                      },
                    }
              }
              name="returning_on"
              value={formData.returning_on}
              onChange={handleFormChange}
            />
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <Stack direction={"column"} justifyContent={"flex-start"}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Adults
          </Typography>
          <TextField
            placeholder="0"
            id="outlined-start-adornment"
            type="number"
            size="small"
            sx={{
              m: 1,
              /*height: "10vh", */
              "& input::placeholder": {
                fontSize: "11px",
              },
            }}
            name="adults"
            value={formData.adults}
            onChange={handleFormChange}
          />
        </Stack>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <Stack
          direction={isMobile ? "column" : "row"}
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack direction={"column"} justifyContent={"flex-start"}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Child
            </Typography>
            <TextField
              placeholder="0"
              id="outlined-start-adornment"
              size="small"
              type="number"
              sx={
                isMobile
                  ? {
                      m: 1,
                      /*height: "10vh", */
                      "& input::placeholder": {
                        fontSize: "11px",
                      },
                    }
                  : {
                      m: 1,
                      width: "11vw",
                      /*height: "10vh", */
                      "& input::placeholder": {
                        fontSize: "11px",
                      },
                    }
              }
              name="kids"
              value={formData.kids}
              onChange={handleFormChange}
            />
          </Stack>
          <Stack direction={"column"} justifyContent={"flex-start"}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Infant
            </Typography>
            <TextField
              placeholder="0"
              id="outlined-start-adornment"
              size="small"
              type="number"
              sx={
                isMobile
                  ? {
                      m: 1,
                      /*height: "10vh", */
                      "& input::placeholder": {
                        fontSize: "11px",
                      },
                    }
                  : {
                      m: 1,
                      width: "11vw",
                      /*height: "10vh", */
                      "& input::placeholder": {
                        fontSize: "11px",
                      },
                    }
              }
              name="infants"
              value={formData.infants}
              onChange={handleFormChange}
            />
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <Stack
          direction={"column"}
          justifyContent={"flex-end"}
          alignItems={"flex-start"}
          sx={{ height: "100%" }}
        >
          <Button
            variant="contained"
            sx={{
              background: "rgb(70,174,247)",
              background:
                "radial-gradient(circle, rgba(70,174,247,1) 0%, rgba(29,213,230,1) 100%)",

              color: "#FFF",
              mb: "10px",
            }}
            onClick={goToSearch}
          >
            Search For Best Flights
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Round;
