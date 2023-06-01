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

export const getPackages = async (city) => {
  const response = await fetch(`https://flightaxis.vercel.app/packages/${city}`);
  const data = await response.json();
  return data;
};

export const sendPackageBooking = async (formData) => {
  const response = await fetch("https://flightaxis.vercel.app/packageBookings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  const data = await response.json();
  return data;
};