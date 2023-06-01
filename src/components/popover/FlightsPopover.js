import React, { useState } from "react";
import { Dialog, DialogContent } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import GetAQuoteDialog from "../getaquotedialog/GetAQuoteDialog";

export default function FlightsPopover({
  openPop,
  handleClickPop,
  handleClosePop,
  isMobile
}) {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);


  const [menuShow, setMenuShow] = useState({
    westAfrica: false,
    eastAfrica: false,
    nepal: false,
  });

  let eastAfricaCities = [
    "Addis Ababa",
    "Dar es Salaam",
    "Entebbe",
    "Harare",
    "Mombasa",
    "Nairobi",
  ];
  
  const location = useLocation();

  let westAfricaCities = ["Abidjan", "Accra", "Lagos"];

  let nepalCities = ["Kathmandu"];

  const openQuote = () => {
		setOpen(true);
	};

  return (
    <Dialog fullWidth maxWidth="lg" open={openPop} onClose={handleClosePop}>
      	<GetAQuoteDialog closeParent={handleClosePop} label="destination" open={open} setOpen={setOpen} isMobile={isMobile} />

      <h2 className="destinations-heading">Popular Destinations</h2>
      <DialogContent>
        <div className="destination-links">
          <div className="countries-links">
            <div
              className="country-link"
              onMouseOver={() =>
                setMenuShow((prev) => {
                  return { ...prev, eastAfrica: true };
                })
              }
              onMouseOut={() =>
                setMenuShow((prev) => {
                  return { ...prev, eastAfrica: false };
                })
              }
            >
              East Africa <ChevronRightIcon />
              {menuShow.eastAfrica && (
                <div className="city-links">
                  {eastAfricaCities.map((city) => {
                    return (
                      <div
                        onClick={() => {
                          handleClosePop();
                          // location.pathname === "/destination" && window.location.reload(false);
                          setMenuShow(false);
                          navigate("/packages-loader", {
                            state: { city },
                          });
                        }}
                        className="city-link"
                      >
                        {city}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            <div className="country-link" onClick={openQuote}>Australia</div>
            <div className="country-link" onClick={openQuote}>Canada</div>
            <div
              className="country-link"
              onMouseOver={() =>
                setMenuShow((prev) => {
                  return { ...prev, westAfrica: true };
                })
              }
              onMouseOut={() =>
                setMenuShow((prev) => {
                  return { ...prev, westAfrica: false };
                })
              }
            >
              West Africa <ChevronRightIcon />
              {menuShow.westAfrica && (
                <div className="city-links city-links_west-africa">
                  {westAfricaCities.map((city) => {
                    return (
                      <div
                        onClick={() => {
                          handleClosePop();
                          // location.pathname === "/destination" && window.location.reload(false);
                          setMenuShow(false);
                          navigate("/packages-loader", {
                            state: { city },
                          });
                        }}
                        className="city-link"
                      >
                        {city}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            <div className="country-link" onClick={openQuote}>Caribbean</div>
            <div className="country-link" onClick={openQuote}>India</div>
            <div
              className="country-link"
              onMouseOver={() =>
                setMenuShow((prev) => {
                  return { ...prev, nepal: true };
                })
              }
              onMouseOut={() =>
                setMenuShow((prev) => {
                  return { ...prev, nepal: false };
                })
              }
            >
              Nepal <ChevronRightIcon />
              {menuShow.nepal && (
                <div className="city-links">
                  {nepalCities.map((city) => {
                    return (
                      <div
                        onClick={() => {
                          handleClosePop();
                          // location.pathname === "/destination" && window.location.reload(false);
                          setMenuShow(false);
                          navigate("/packages-loader", {
                            state: { city },
                          });
                        }}
                        className="city-link"
                      >
                        {city}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            <div className="country-link" onClick={openQuote}>Far East</div>
            <div className="country-link" onClick={openQuote}>Indian Ocean</div>
            <div className="country-link" onClick={openQuote}>Mexico</div>
            <div className="country-link" onClick={openQuote}>Middle East</div>
            <div className="country-link" onClick={openQuote}>New Zealand</div>
            <div className="country-link" onClick={openQuote}>North Africa</div>
            <div className="country-link" onClick={openQuote}>Pakistan</div>
            <div className="country-link" onClick={openQuote}>South America</div>
            <div className="country-link" onClick={openQuote}>South Africa</div>
            <div className="country-link" onClick={openQuote}>USA</div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
