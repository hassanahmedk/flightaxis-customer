export const sendMessage = async (formData) => {
  const response = await fetch("https://flightaxis.vercel.app/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  const data = await response.json();
  return data;
};

export const getFlights = async () => {
  const response = await fetch("https://flightaxis.vercel.app/flights");
  const data = await response.json();
  return data;
};

export const sendBooking = async (formData) => {
  const response = await fetch("https://flightaxis.vercel.app/bookings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  const data = await response.json();
  return data;
};
export const sendQuote = async (formData) => {
  const response = await fetch("https://flightaxis.vercel.app/quotes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  const data = await response.json();
  return data;
};

export const sendEmail = async (formData) => {
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({...formData, access_key:"68824e67-8e13-4dbf-9e56-090d7189b0c6"}),
  });
  const data = await response.json();
  return data;
};
