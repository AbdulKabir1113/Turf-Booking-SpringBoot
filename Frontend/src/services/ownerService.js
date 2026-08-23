import axios from "axios";

const API = "http://localhost:8080/TurfBooking";

// Dashboard
export const getOwnerDashboard = async (ownerId) => {
  try {
    const response = await axios.get(`${API}/ownerDashboard`, {
      params: { ownerId },
    });

    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// My Turfs
export const getOwnerTurfs = async (ownerId) => {
  try {
    const response = await axios.get(`${API}/getOwnerTurfs`, {
      params: { ownerId },
    });

    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

// Add Turf
export const addTurf = async (formData) => {

  try {

    const response = await axios.post(
      `${API}/addTurf`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data;

  } catch (error) {

    console.log(error);

    return {
      success: false,
      message: "Failed To Add Turf",
    };

  }

};

// Delete Turf (We'll build backend next)
export const deleteTurf = async (turfId) => {
  try {
    const response = await axios.delete(
      `${API}/deleteTurf`,
      {
        params: { turfId },
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);

    return null;
  }
};

// Update Turf (We'll build backend next)
export const updateTurf = async (turf) => {
  try {
    const response = await axios.put(
      `${API}/updateTurf`,
      turf
    );

    return response.data;
  } catch (error) {
    console.log(error);

    return null;
  }
};

// Owner Bookings
export const getOwnerBookings = async (ownerId) => {

  try {

    const response = await axios.get(
      `${API}/getOwnerBookings`,
      {
        params: {
          ownerId,
        },
      }
    );

    return response.data;

  } catch (error) {

    console.log(error);

    return [];

  }

};

// Owner Profile
export const getOwnerProfile = async (ownerId) => {

  try {

    const response = await axios.get(
      `${API}/getOwnerProfile`,
      {
        params: {
          ownerId,
        },
      }
    );

    return response.data;

  } catch (error) {

    console.log(error);

    return null;

  }

};