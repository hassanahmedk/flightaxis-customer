import {
  Box,
  Button,
  Dialog,
  DialogContent,
  FormControl,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import { sendPackageBooking } from "../../assets/api/api";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useFormik } from "formik";
import * as Yup from "yup";
import CloseIcon from "@mui/icons-material/Close";
import {  useNavigate } from "react-router-dom";

const PackageBookDialog = ({ isMobile, open, setOpen, data }) => {
  /* const handleClickOpen = () => {
		setOpen(true);
	}; */

  const date = new Date();
    let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      customer_email: "",
      customer_phone: "",
      total_fare: "",
      side_notes: "",
      no_of_passengers: "",
      departing_on: "",
      returning_on: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      customer_email: Yup.string().email("Invalid Email").required("Required"),
      customer_phone: Yup.number().moreThan(0, "No negative numbers allowed!"),
      total_fare: "",
      side_notes: "",
      no_of_passengers: Yup.number().min(1, "At least 1 passenger!"),
      departing_on: Yup.date().min(date, "Can't book a flight for yesterday!"),
      returning_on: Yup.date().min(date, "Can't return yesterday!"),
    }),
    onSubmit: () => {
      handleBookingSubmit();
    },
  });

  const [formData, setFormData] = useState({
    name: "",
    customer_email: "",
    customer_phone: "",
    side_notes: " ",
  });

  const [booked, setBooked] = useState(false);

  const handleClose = () => {
    booked && navigate("/")
    setBooked(false);
    setOpen(false);
    setFormData({})
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



  const handleBookingSubmit = () => {
    if (Object.values(formData).some((value) => value === "")) {
      alert("Please fill in all the fields");
    } else {
        sendPackageBooking({
            ...formData,
            ...data,
        })
            .then((result) => {
                setBooked(true);
                console.log(result);
            })
            .catch((error) => alert("An error occured, try again"));
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent
        sx={{
          p: "35px",
          background: "rgb(70,174,247)",
          background:
            "linear-gradient(-180deg, rgba(70,174,247,1) 77%, rgba(70,174,247,0) 100%)",
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
            <IconButton
              onClick={handleClose}
              sx={{
                position: "absolute",
                top: -0,
                right: -0,
              }}
            >
              <CancelRoundedIcon sx={{ color: "#d2d4d3" }} />
            </IconButton>

            <CheckCircleIcon sx={{ fontSize: "5rem", color: "green" }} />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
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
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            sx={{ position: "relative" }}
          >
            <IconButton
              onClick={handleClose}
              sx={{
                position: "absolute",
                top: -15,
                right: -15,
              }}
            >
              <CancelRoundedIcon sx={{ color: "#d2d4d3" }} />
            </IconButton>
            <Box
              sx={{
                background: "url('/images/diamond-shape.png')",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                p: "30px",
                gap: "0.4rem",
                display: "flex",
                justifyContent: "center",
                alignitems: "center",
              }}
            >
              <Typography
                variant={isMobile ? "h6" : "h5"}
                sx={{ fontFamily: "cursive", color: "white" }}
                textAlign="center"
              >
                Book Package
              </Typography>
            </Box>

            <FormControl fullWidth>
              <Stack direction="column" justifyContent="flex-start">
                <Typography variant="subtitle2">Name</Typography>
                <TextField
                  placeholder="Name"
                  id="outlined-start-adornment"
                  size="small"
                  sx={{
                    m: 1,
                    "& input::placeholder": {
                      fontSize: "11px",
                      width: "100%",
                    },
                  }}
                  name={"name"}
                  value={formData.name}
                  onChange={handleFormChange}
                />
              </Stack>
              <Stack direction="column" justifyContent="flex-start">
                <Typography variant="subtitle2">Phone number</Typography>
                <TextField
                  placeholder="Phone number"
                  id="outlined-start-adornment"
                  size="small"
                  sx={{
                    m: 1,
                    "& input::placeholder": {
                      fontSize: "11px",
                      width: "100%",
                    },
                  }}
                  name={"customer_phone"}
                  value={formData.customer_phone}
                  onChange={handleFormChange}
                />
              </Stack>
              <Stack direction="column" justifyContent="flex-start">
                <Typography variant="subtitle2">Email</Typography>
                <TextField
                  placeholder="Email"
                  id="outlined-start-adornment"
                  size="small"
                  type="email"
                  sx={{
                    m: 1,
                    "& input::placeholder": {
                      fontSize: "11px",
                      width: "100%",
                    },
                  }}
                  name={"customer_email"}
                  value={formData.customer_email}
                  onChange={handleFormChange}
                />
              </Stack>
              <Stack direction="column" alignItems="stretch">
                <Typography variant="subtitle1" color="black">
                  Side Notes: (Optional)
                </Typography>

                <TextField
                  id="message"
                  placeholder="Type Here"
                  multiline
                  minRows={isMobile ? 6 : 7}
                  InputProps={{
                    style: {
                      "&:focus": {
                        borderColor: "blue",
                      },
                      "&:hover": {
                        borderColor: "blue",
                      },
                      width: isMobile ? "16.5rem" : "",
                      marginLeft: isMobile ? "-0.8rem" : "",
                    },
                  }}
                  name="side_notes"
                  value={formData.side_notes}
                  onChange={handleFormChange}
                />
              </Stack>
            </FormControl>
            <Button
              onClick={handleBookingSubmit}
              variant="contained"
              sx={{ borderRadius: "10px", p: "10px" }}
            >
              Book
            </Button>
          </Stack>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PackageBookDialog;
