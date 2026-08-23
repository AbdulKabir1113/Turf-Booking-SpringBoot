import { useState } from "react";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const navigate = useNavigate();

  const currentUser = JSON.parse(localStorage.getItem("user"));

  const [user, setUser] = useState({
    fullName: currentUser?.fullName || "",
    email: currentUser?.email || "",
    phone: currentUser?.phone || "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    // TODO: Call update profile API

    localStorage.setItem(
      "user",
      JSON.stringify({
        ...currentUser,
        fullName: user.fullName,
        phone: user.phone,
      })
    );

    setMessage("Profile updated successfully.");

    setTimeout(() => {
      navigate("/profile");
      window.location.reload();
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">

      <div className="bg-white rounded-3xl shadow-xl w-full max-w-lg p-8">

        <h1 className="text-3xl font-bold text-center text-green-600">
          Edit Profile
        </h1>

        <form
          onSubmit={handleUpdate}
          className="space-y-5 mt-8"
        >

          <input
            type="text"
            name="fullName"
            value={user.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full border rounded-xl px-4 py-3 outline-none focus:border-green-600"
          />

          <input
            type="email"
            value={user.email}
            disabled
            className="w-full border rounded-xl px-4 py-3 bg-gray-100"
          />

          <input
            type="text"
            name="phone"
            value={user.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="w-full border rounded-xl px-4 py-3 outline-none focus:border-green-600"
          />

          {message && (
            <div className="bg-green-100 border border-green-300 text-green-700 rounded-xl px-4 py-3">
              {message}
            </div>
          )}

          <button
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold"
          >
            Save Changes
          </button>

        </form>

      </div>

    </div>
  );
};

export default EditProfile;