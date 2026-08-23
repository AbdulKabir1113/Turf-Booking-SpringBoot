import axios from "axios";

const API = "http://localhost:8080/TurfBooking";

// Signup
export const signupUser = async (userData) => {
  try {
    const params = new URLSearchParams();

    params.append("fullName", userData.fullName);
    params.append("email", userData.email);
    params.append("phone", userData.phone);
    params.append("password", userData.password);

    const response = await axios.post(
      `${API}/signup`,
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
      message: "Registration Failed",
    };
  }
};

// Login
export const loginUser = async (email, password) => {
  try {
    const params = new URLSearchParams();

    params.append("email", email);
    params.append("password", password);

    const response = await axios.post(
      `${API}/login`,
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
      message: "Login Failed",
    };
  }
};

// Logout
export const logoutUser = () => {
  localStorage.removeItem("user");
};