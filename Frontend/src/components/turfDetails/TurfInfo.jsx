import { MapPin, Star, Clock } from "lucide-react";

const TurfInfo = ({ turf }) => {
  return (
    <div className="bg-white">

      <div className="max-w-7xl mx-auto px-6 py-8">

        <div className="flex flex-col md:flex-row md:items-center gap-4">

          <h1 className="text-4xl font-bold text-gray-900">
            {turf.turfName}
          </h1>

          <div className="flex items-center gap-2">

            <Star
              size={20}
              fill="#facc15"
              color="#facc15"
            />

            <span className="font-semibold">
              {turf.rating}
            </span>

          </div>

        </div>

        <div className="flex items-center gap-2 mt-5 text-gray-600">

          <MapPin size={20} />

          <span>
            {turf.location}, {turf.city}
          </span>

        </div>

        <div className="flex items-center gap-2 mt-3 text-gray-600">

          <Clock size={20} />

          <span>
            {turf.openingTime} - {turf.closingTime}
          </span>

        </div>

      </div>

    </div>
  );
};

export default TurfInfo;