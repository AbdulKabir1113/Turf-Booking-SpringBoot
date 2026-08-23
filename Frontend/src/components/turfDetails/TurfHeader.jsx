import { ArrowLeft, Share2, MoreVertical, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TurfHeader = ({ turf }) => {

  const navigate = useNavigate();

  const handleShare = async () => {

    if (navigator.share) {

      try {

        await navigator.share({
          title: turf.turfName,
          text: `Check out ${turf.turfName}`,
          url: window.location.href,
        });

      } catch (err) {

        console.log(err);

      }

    } else {

      navigator.clipboard.writeText(window.location.href);

      alert("Link copied to clipboard.");

    }

  };

  return (

    <div className="bg-white border-b shadow-sm">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Left */}

        <div className="flex items-center gap-4">

          <button
  onClick={() =>
    navigate("/", {
      replace: true,
    })
  }
>
  <ArrowLeft
    size={22}
    className="cursor-pointer hover:text-green-600"
  />
</button>

          <div>

            <p className="text-sm text-gray-500">

              Home / {turf.location}

            </p>

            <h2 className="text-2xl font-bold">

              {turf.turfName}

            </h2>

            <div className="flex items-center gap-2 text-gray-500 mt-1">

              <MapPin size={16} />

              {turf.location}

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="flex items-center gap-4">

          <button
            onClick={handleShare}
          >

            <Share2
              size={20}
              className="cursor-pointer hover:text-green-600"
            />

          </button>

          <MoreVertical
            size={20}
            className="cursor-pointer hover:text-green-600"
          />

        </div>

      </div>

    </div>

  );

};

export default TurfHeader;