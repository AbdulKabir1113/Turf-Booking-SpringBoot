import axios from "axios";

const API = "http://localhost:8080/TurfBooking";

export const getAllTurfs = async (search = "") => {

  try {

    const response = await axios.get(
      `${API}/getAllTurfs`,
      {
        params: {
          search,
        },
      }
    );

    return response.data;

  } catch (error) {

    console.log(error);

    return [];

  }

};