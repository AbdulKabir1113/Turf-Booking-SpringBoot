import { Link } from "react-router-dom";
import { MapPin, Star, Pencil, Trash2 } from "lucide-react";

const OwnerTurfCard = ({ turf, refresh }) => {

  const image = turf.thumbnailUrl?.startsWith("http")
    ? turf.thumbnailUrl
    : `http://localhost:8080/TurfBooking/images/${turf.thumbnailUrl}`;

  const handleDelete = () => {

    alert("Delete Turf - We'll implement this next.");

  };

  return (

    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">

      {/* Image */}

      <img
        src={image}
        alt={turf.turfName}
        className="w-full h-56 object-cover"
        onError={(e) => {
          e.target.src = "https://placehold.co/600x400?text=No+Image";
        }}
      />

      {/* Body */}

      <div className="p-5">

        <div className="flex justify-between items-start">

          <h2 className="text-2xl font-bold">

            {turf.turfName}

          </h2>

          <span
            className={`px-3 py-1 rounded-full text-sm font-semibold ${
              turf.status === "ACTIVE"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >

            {turf.status}

          </span>

        </div>

        <div className="flex items-center gap-2 text-gray-500 mt-3">

          <MapPin size={18} />

          <span>

            {turf.location}, {turf.city}

          </span>

        </div>

        <div className="flex justify-between items-center mt-5">

          <div>

            <h3 className="text-3xl font-bold text-green-600">

              ₹{turf.pricePerHour}

            </h3>

            <p className="text-gray-500">

              Per Hour

            </p>

          </div>

          <div className="flex items-center gap-1">

            <Star
              size={18}
              fill="gold"
              color="gold"
            />

            <span className="font-semibold">

              {turf.rating}

            </span>

          </div>

        </div>

        {/* Buttons */}

        <div className="grid grid-cols-2 gap-3 mt-6">

          <Link
            to={`/owner/edit-turf/${turf.turfId}`}
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold"
          >

            <Pencil size={18} />

            Edit

          </Link>

          <button
            onClick={handleDelete}
            className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold"
          >

            <Trash2 size={18} />

            Delete

          </button>

        </div>

      </div>

    </div>

  );

};

export default OwnerTurfCard;