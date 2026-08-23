import axios from "axios";

const API = "http://localhost:8080/TurfBooking";

// Get booked slots
export const getBookedSlots = async (turfId, bookingDate) => {
  try {
    const response = await axios.get(`${API}/getBookedSlots`, {
      params: {
        turfId,
        bookingDate,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching booked slots:", error);
    return [];
  }
};

// Book slot(s)
export const bookSlot = async (bookingData) => {
  try {
    const response = await axios.post(
      `${API}/bookSlot`,
      bookingData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Booking Error:", error);

    return {
      success: false,
      message: "Booking Failed",
    };
  }
};

export const getMyBookings = async (userId) => {
  try {

    const response = await axios.get(
      `${API}/getMyBookings`,
      {
        params: { userId }
      }
    );

    return response.data;

  } catch (error) {

    console.log(error);

    return [];

  }
};

export const cancelBooking = async (bookingId) => {

    try {

        const params = new URLSearchParams();

        params.append("bookingId", bookingId);

        const response = await axios.post(
            `${API}/cancelBooking`,
            params,
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }
        );

        return response.data;

    } catch (error) {

        console.log(error);

        return {
            success: false,
            message: "Cancellation Failed",
        };

    }

};