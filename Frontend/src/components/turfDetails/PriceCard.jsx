import { useNavigate } from "react-router-dom";
import { Star, CalendarDays } from "lucide-react";

const PriceCard = ({ turf }) => {

  const navigate = useNavigate();

  const handleBooking = () => {

    navigate("/booking", {
    state: {
        turf
    }
});

  };

  return (

    <div className="bg-white rounded-3xl shadow-xl border sticky top-24">

      <div className="p-8">

        <h3 className="text-gray-500 text-lg">

          Starting From

        </h3>

        <div className="mt-2 flex items-end gap-2">

          <h1 className="text-5xl font-bold text-green-600">

            ₹{turf?.pricePerHour}

          </h1>

          <span className="text-gray-500 mb-2">

            / Hour

          </span>

        </div>

        <div className="flex items-center gap-2 mt-6">

          <Star
            size={20}
            fill="#facc15"
            color="#facc15"
          />

          <span className="font-semibold">

            {turf?.rating || 0}

          </span>

          <span className="text-gray-500">

            ({turf?.reviewCount || 0} Reviews)

          </span>

        </div>

        <button
          onClick={handleBooking}
          className="w-full mt-8 bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl text-lg font-semibold flex justify-center items-center gap-3 transition"
        >

          <CalendarDays size={22} />

          Check Availability

        </button>

        <p className="text-center text-gray-500 mt-4 text-sm">

          Instant confirmation • Secure Payment

        </p>

      </div>

    </div>

  );

};

export default PriceCard;