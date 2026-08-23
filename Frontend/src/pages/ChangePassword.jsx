import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");
  const [type, setType] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setMessage("");
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (
      !form.currentPassword ||
      !form.newPassword ||
      !form.confirmPassword
    ) {

      setType("error");
      setMessage("Please fill all fields.");

      return;
    }

    if (form.newPassword !== form.confirmPassword) {

      setType("error");
      setMessage("Passwords do not match.");

      return;
    }

    // TODO: Call Change Password API

    setType("success");
    setMessage("Password changed successfully.");

    setTimeout(() => {
      navigate("/profile");
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">

      <div className="bg-white rounded-3xl shadow-xl w-full max-w-lg p-8">

        <h1 className="text-3xl font-bold text-center text-green-600">
          Change Password
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 mt-8"
        >

          <input
            type="password"
            name="currentPassword"
            placeholder="Current Password"
            value={form.currentPassword}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3 outline-none focus:border-green-600"
          />

          <input
            type="password"
            name="newPassword"
            placeholder="New Password"
            value={form.newPassword}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3 outline-none focus:border-green-600"
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3 outline-none focus:border-green-600"
          />

          {message && (
            <div
              className={`rounded-xl px-4 py-3 ${
                type === "success"
                  ? "bg-green-100 border border-green-300 text-green-700"
                  : "bg-red-100 border border-red-300 text-red-700"
              }`}
            >
              {message}
            </div>
          )}

          <button
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold"
          >
            Update Password
          </button>

        </form>

      </div>

    </div>
  );
};

export default ChangePassword;