import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../services/userService";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  useEffect(() => {

  const user = JSON.parse(localStorage.getItem("user"));

  if (user?.role === "OWNER") {

    navigate("/owner/dashboard", { replace: true });

  } else if (user?.role === "USER") {

    navigate("/", { replace: true });

  }

}, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    setMessage("");

    if (!email || !password) {
      setMessageType("error");
      setMessage("Please enter email and password.");
      return;
    }

    setLoading(true);

    const response = await loginUser(email, password);

    setLoading(false);

    if (response.success) {

      localStorage.setItem(
        "user",
        JSON.stringify(response.user)
      );

      console.log(response.user);

      setMessageType("success");
      setMessage(response.message);

      setTimeout(() => {

        // Redirect if user came from payment/booking page
        if (location.state?.redirectTo) {

          navigate(location.state.redirectTo, {
            state: location.state.bookingData,
          });

          return;
        }

        // Role-based login
        if (response.user.role === "OWNER") {

          
          navigate("/owner/dashboard", { replace: true });

        } else {

          navigate("/", { replace: true });

        }

      }, 1000);

    } else {

      setMessageType("error");
      setMessage(response.message);

    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

      <div className="bg-white shadow-xl rounded-3xl p-8 w-full max-w-md">

        <h1 className="text-3xl font-bold text-center text-green-600">
          Welcome Back
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Login to continue booking your favourite turfs.
        </p>

        <form onSubmit={handleLogin} className="space-y-5">

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setMessage("");
            }}
            className="w-full border rounded-xl px-4 py-3 outline-none focus:border-green-600"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setMessage("");
            }}
            className="w-full border rounded-xl px-4 py-3 outline-none focus:border-green-600"
          />

          {message && (
            <div
              className={`rounded-xl px-4 py-3 text-sm font-medium ${
                messageType === "success"
                  ? "bg-green-100 border border-green-300 text-green-700"
                  : "bg-red-100 border border-red-300 text-red-700"
              }`}
            >
              {message}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white py-3 rounded-xl font-semibold transition"
          >
            {loading ? "Logging In..." : "Login"}
          </button>

        </form>

        <p className="text-center mt-6 text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-green-600 font-semibold"
          >
            Sign Up
          </Link>
        </p>

      </div>

    </div>
  );
};

export default Login;