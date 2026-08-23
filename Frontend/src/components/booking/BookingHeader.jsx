import { ArrowLeft, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BookingHeader = ({ turf }) => {

  const navigate = useNavigate();

  return (

    <div className="bg-white border-b">

      <div className="max-w-6xl mx-auto px-8 py-6 flex items-center justify-between">

        <div className="flex items-center gap-5">

          <button
            onClick={() =>
              navigate(`/turf/${turf.turfId}`, {
                state: { turf },
              })
            }
          >

            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-green-100 transition">

              <ArrowLeft size={22} />

            </div>

          </button>

          <div>

            <h1 className="text-3xl font-bold">

              {turf.turfName}

            </h1>

            <div className="flex items-center gap-2 mt-2 text-gray-500">

              <MapPin size={18} />

              <span>

                {turf.location}, {turf.city}

              </span>

            </div>

          </div>

        </div>

        <div className="hidden md:block text-right">

          <p className="text-gray-500">

            Starting From

          </p>

          <h2 className="text-3xl font-bold text-green-600">

            ₹{turf.pricePerHour}

            <span className="text-lg text-gray-500">

              /hour

            </span>

          </h2>

        </div>

      </div>

    </div>

  );

};

export default BookingHeader;