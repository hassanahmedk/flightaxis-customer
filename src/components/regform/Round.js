import React, { useState, useRef } from "react";
import {
  Button,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import AutocompleteAirports from "./AutocompleteAirports";

const Round = ({ isMobile }) => {
  const inputRef = useRef(null);
  const inputRef2 = useRef(null);

  const [formData, setFormData] = useState({
    leaving_from: "",
    going_to: "",
    departing_on: "",
    returning_on: "",
    adults: "1",
    kids: "0",
    infants: "0",
  });

  const navigate = useNavigate();

  const goToSearch = () => {
    if (Object.values(formData).some((value) => value === "")) {
      alert("Please fill in all the fields");
    } else {
      navigate("/flights-loader", { state: { formData: formData } });
    }
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
    <Grid container spacing={1}>
      <Grid item xs={12} sm={12} md={4}>
        <Stack
          direction={"column"}
          justifyContent={"center"}
          sx={{ width: "100%" }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            From
          </Typography>
          <AutocompleteAirports
            setValue={handleAirportChange}
            name="leaving_from"
            label="Leaving from"
            width="100%"
            size="small"
            isMobile={isMobile}
          />
        </Stack>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <Stack
          direction={"column"}
          justifyContent={"flex-start"}
          sx={{ width: "100%" }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            To
          </Typography>
          <AutocompleteAirports
            setValue={handleAirportChange}
            name="going_to"
            label="Going to"
            width="100%"
            size="small"
            isMobile={isMobile}
          />
        </Stack>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <Stack
          direction={isMobile ? "column" : "row"}
          justifyContent="flex-start"
          //alignItems="center"
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
              inputProps={{
                min: new Date().toISOString().split('T')[0], // Set the minimum selectable date to today
              }}
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
              inputRef={inputRef}
              onClick={() => {
                inputRef.current.showPicker();
              }}
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
              inputProps={{
                min: new Date().toISOString().split('T')[0], // Set the minimum selectable date to today
              }}
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
              inputRef={inputRef2}
              onClick={() => {
                inputRef2.current.showPicker();
              }}
            />
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <Stack
          direction={"column"}
          justifyContent={"flex-start"}
          sx={{ width: "100%" }}
        >
          <FormControl
            fullWidth
            sx={{ diplay: "flex", flexDirection: "column" }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Adults
            </Typography>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="adults"
              size="small"
              value={formData.adults}
              onChange={handleFormChange}
              sx={{
                m: 1,
                /*height: "10vh", */
                "& input::placeholder": {
                  fontSize: "11px",
                },
              }}
            >
              <MenuItem selected value={1}>
                1
              </MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={9}>9</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <Stack
          direction={isMobile ? "column" : "row"}
          justifyContent="space-between"
          alignItems="center"
          sx={{ width: "100%" }}
        >
          <Stack
            direction={"column"}
            justifyContent={"flex-start"}
            sx={{ width: "100%" }}
          >
            <FormControl
              fullWidth
              sx={{
                diplay: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Child
              </Typography>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="kids"
                value={formData.kids}
                onChange={handleFormChange}
                size="small"
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
              >
                <MenuItem selected value={0}>
                  0
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={8}>8</MenuItem>
                <MenuItem value={9}>9</MenuItem>
              </Select>
            </FormControl>
          </Stack>
          <Stack
            direction={"column"}
            justifyContent={"flex-start"}
            sx={{ width: "100%" }}
          >
            <FormControl
              fullWidth
              sx={{ diplay: "flex", flexDirection: "column" }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Infant
              </Typography>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="infants"
                value={formData.infants}
                onChange={handleFormChange}
                size="small"
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
              >
                <MenuItem selected value={0}>
                  0
                </MenuItem>
                <MenuItem selected value={1}>
                  1
                </MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={8}>8</MenuItem>
                <MenuItem value={9}>9</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <Stack
          direction={"column"}
          justifyContent={"flex-end"}
          alignItems={"stretch"}
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
