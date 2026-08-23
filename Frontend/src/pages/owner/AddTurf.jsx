import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addTurf } from "../../services/ownerService";

const AddTurf = () => {

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

 const [turf, setTurf] = useState({
  turfName: "",
  location: "",
  city: "",
  pricePerHour: "",
  openingTime: "",
  closingTime: "",
  description: "",
});

const [thumbnail, setThumbnail] = useState(null);

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");

  const [messageType, setMessageType] = useState("");

  const handleChange = (e) => {

    setTurf({

      ...turf,

      [e.target.name]: e.target.value,

    });

    setMessage("");

  };
const handleSubmit = async (e) => {

  e.preventDefault();

  setMessage("");

  if (
    !turf.turfName ||
    !turf.location ||
    !turf.city ||
    !turf.pricePerHour ||
    !turf.openingTime ||
    !turf.closingTime ||
    !turf.description ||
    !thumbnail
  ) {

    setMessageType("error");
    setMessage("Please fill all fields.");

    return;

  }

  setLoading(true);

 const formData = new FormData();

formData.append("ownerId", user.userId);
formData.append("turfName", turf.turfName);
formData.append("location", turf.location);
formData.append("city", turf.city);
formData.append("pricePerHour", turf.pricePerHour);
formData.append("openingTime", turf.openingTime);
formData.append("closingTime", turf.closingTime);
formData.append("description", turf.description);
formData.append("thumbnail", thumbnail);

const response = await addTurf(formData);

  setLoading(false);

  if (response.success) {

    setMessageType("success");
    setMessage(response.message);

    setTimeout(() => {

      navigate("/owner/turfs");

    }, 1000);

  } else {

    setMessageType("error");
    setMessage(response.message);

  }

};
  return (

    <div className="min-h-screen bg-gray-100 py-10">

      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-8">
        <h1 className="text-4xl font-bold text-center text-green-600">

          Add New Turf

        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">

          Fill all details to list your turf.

        </p>

        <div className="grid md:grid-cols-2 gap-5">

          <input
            type="text"
            name="turfName"
            placeholder="Turf Name"
            value={turf.turfName}
            onChange={handleChange}
            className="border rounded-xl px-4 py-3 outline-none focus:border-green-600"
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            value={turf.location}
            onChange={handleChange}
            className="border rounded-xl px-4 py-3 outline-none focus:border-green-600"
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            value={turf.city}
            onChange={handleChange}
            className="border rounded-xl px-4 py-3 outline-none focus:border-green-600"
          />

          <input
            type="number"
            name="pricePerHour"
            placeholder="Price Per Hour"
            value={turf.pricePerHour}
            onChange={handleChange}
            className="border rounded-xl px-4 py-3 outline-none focus:border-green-600"
          />

          <input
            type="time"
            name="openingTime"
            value={turf.openingTime}
            onChange={handleChange}
            className="border rounded-xl px-4 py-3 outline-none focus:border-green-600"
          />

          <input
            type="time"
            name="closingTime"
            value={turf.closingTime}
            onChange={handleChange}
            className="border rounded-xl px-4 py-3 outline-none focus:border-green-600"
          />

        </div>

        <textarea
          name="description"
          placeholder="Description"
          rows="4"
          value={turf.description}
          onChange={handleChange}
          className="w-full border rounded-xl px-4 py-3 mt-5 outline-none focus:border-green-600"
        />

       <div className="mt-5">

  <label className="block font-medium mb-2">

    Thumbnail Image

  </label>

  <input
    type="file"
    accept="image/*"
    onChange={(e) => {

      setThumbnail(e.target.files[0]);

    }}
    className="w-full border rounded-xl px-4 py-3"
  />

</div>

        {message && (

          <div
            className={`mt-5 rounded-xl px-4 py-3 font-medium ${
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
  className="w-full mt-8 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold disabled:bg-green-400"
>

  {loading ? "Adding Turf..." : "Add Turf"}

</button>

</form>
      </div>

    

  );

};

export default AddTurf;