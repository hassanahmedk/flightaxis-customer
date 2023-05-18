import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getFlights } from "../../assets/api/api";
import loadingGif from "../../assets/loader/flight-loader.gif";
import loadingVid from "../../assets/loader/flight-video.gif";

function Loader() {
    const navigate = useNavigate();
    const { state } = useLocation();
    let formData = state.formData;
  

    useEffect(()=>{
        window.scrollTo(0, 0);

        getFlights()
        .then(flights=>{
            flights = flights.filter((flight=>{
              return (flight.leaving_from === formData.leaving_from && flight.going_to === formData.going_to)
        
            }))
            if(state.type === "one-way"){
              navigate("/search-results-one-way", { state: { flights, formData: formData }  });
            } else {
              navigate("/search-results-round-trip", { state: { flights, formData: formData }  });
            }
    
        })
    }, [])

  return (
    <div
      style={{
        backgroundColor: "#000307",
        height: "80vh",
        width: "100vw",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
      }}
    >
        <h3 style={{color:"#fdfdfd", fontSize:"2rem", fontWeight:"400"}}>
            We are searching best flights for you...
        </h3>
       <img style={{
        backgroundColor: "#000",
        height: "50vh",
        width: "50vw",
    
      }} src={loadingVid} alt="loading..." /> 
{/* 
      <video style={{
        backgroundColor: "#000",
        height: "70vh",
        width: "70vw",
    
      }} loop autoPlay>
        <source src={loadingVid} type="video/mp4" />
      </video> */}
    </div>
  );
}

export default Loader;
