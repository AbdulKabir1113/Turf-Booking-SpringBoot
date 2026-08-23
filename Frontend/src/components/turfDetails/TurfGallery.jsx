import { Image as ImageIcon } from "lucide-react";

const TurfGallery = ({ turf }) => {

  const image = turf?.thumbnailUrl
    ? turf.thumbnailUrl.startsWith("http")
      ? turf.thumbnailUrl
      : `http://localhost:8080/TurfBooking/images/${turf.thumbnailUrl}`
    : "https://placehold.co/1200x700?text=No+Image";

  return (

    <div className="bg-white">

      <div className="max-w-7xl mx-auto">

        {/* Main Image */}

        <div className="relative">

          <img
            src={image}
            alt={turf?.turfName}
            className="w-full h-[420px] object-cover"
            onError={(e) => {
              e.target.src =
                "https://placehold.co/1200x700?text=No+Image";
            }}
          />

          <div className="absolute inset-0 bg-black/20"></div>

          <div className="absolute bottom-6 left-6 text-white">

            <h2 className="text-4xl font-bold">

              {turf?.turfName}

            </h2>

            <p className="mt-2">

              {turf?.location}, {turf?.city}

            </p>

          </div>

        </div>

        {/* Gallery */}

        <div className="grid grid-cols-4 gap-3 mt-4 px-6 pb-6">

          {[1, 2, 3, 4].map((item) => (

            <img
              key={item}
              src={image}
              alt={turf?.turfName}
              className="h-28 w-full object-cover rounded-xl cursor-pointer hover:scale-105 transition duration-300"
              onError={(e) => {
                e.target.src =
                  "https://placehold.co/400x250?text=No+Image";
              }}
            />

          ))}

        </div>

      </div>

    </div>

  );

};

export default TurfGallery;