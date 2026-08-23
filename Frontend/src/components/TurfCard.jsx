import { useNavigate } from "react-router-dom";
import { MapPin, Clock, Star, BadgeCheck } from "lucide-react";

const TurfCard = ({ turf }) => {

  const navigate = useNavigate();

  const handleBookNow = () => {

    navigate(`/turf/${turf.turfId}`, {
      state: {
        turf,
      },
    });

  };

  return (

    <div
      onClick={handleBookNow}
      className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
    >

      {/* Image */}

      <div className="relative">

        <img
  src={
    turf.thumbnailUrl?.startsWith("http")
      ? turf.thumbnailUrl
      : `http://localhost:8080/TurfBooking/images/${turf.thumbnailUrl}`
  }
  alt={turf.turfName}
  className="w-full h-60 object-cover"
  onError={(e) => {
    e.target.src =
      "https://via.placeholder.com/600x400?text=No+Image";
  }}
/>

        {/* Rating */}

        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center gap-1 shadow">

          <Star
            size={16}
            fill="#facc15"
            color="#facc15"
          />

          <span className="font-semibold">
            {turf.rating}
          </span>

        </div>

        {/* Verified */}

        <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full flex items-center gap-1">

          <BadgeCheck size={15} />

          Verified

        </div>

      </div>

      {/* Body */}

      <div className="p-6">

        <h2 className="text-2xl font-bold">

          {turf.turfName}

        </h2>

        <div className="flex items-center gap-2 text-gray-500 mt-4">

          <MapPin size={18} />

          {turf.location}

        </div>

        <div className="flex items-center gap-2 text-gray-500 mt-2">

          <Clock size={18} />

          {turf.openingTime} - {turf.closingTime}

        </div>

        <div className="flex justify-between items-center mt-6">

          <div>

            <p className="text-3xl font-bold text-green-700">

              ₹{turf.pricePerHour}

            </p>

            <span className="text-gray-500">

              / hour

            </span>

          </div>

        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            handleBookNow();
          }}
          className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold"
        >
          Book Now
        </button>

      </div>

    </div>

  );

};

export default TurfCard;