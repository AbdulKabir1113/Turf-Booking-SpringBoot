import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signupUser } from "../services/userService";

const Signup = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });

    setMessage("");
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    setMessage("");

    if (
      !user.fullName ||
      !user.email ||
      !user.phone ||
      !user.password ||
      !user.confirmPassword
    ) {
      setMessageType("error");
      setMessage("Please fill all fields.");
      return;
    }

    if (user.password !== user.confirmPassword) {
      setMessageType("error");
      setMessage("Passwords do not match.");
      return;
    }

    setLoading(true);

    const response = await signupUser(user);

    setLoading(false);

    if (response.success) {
      setMessageType("success");
      setMessage(response.message);

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } else {
      setMessageType("error");
      setMessage(response.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-3xl p-8 w-full max-w-md">

        <h1 className="text-3xl font-bold text-center text-green-600">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Join TurfHub and start booking your favourite turfs.
        </p>

        <form onSubmit={handleSignup} className="space-y-5">

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={user.fullName}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3 outline-none focus:border-green-600"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3 outline-none focus:border-green-600"
          />

          <input
            type="text"
            name="phone"
            placeholder="Mobile Number"
            value={user.phone}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3 outline-none focus:border-green-600"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3 outline-none focus:border-green-600"
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={user.confirmPassword}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3 outline-none focus:border-green-600"
          />

          {message && (
            <div
              className={`rounded-xl px-4 py-3 text-sm font-medium ${
                messageType === "success"
                  ? "bg-green-100 text-green-700 border border-green-300"
                  : "bg-red-100 text-red-700 border border-red-300"
              }`}
            >
              {message}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold"
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>

        </form>

        <p className="text-center mt-6 text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-green-600 font-semibold"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Signup;