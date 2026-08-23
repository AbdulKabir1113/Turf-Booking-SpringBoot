import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TurfCard from "./TurfCard";
import { getAllTurfs } from "../services/turfService";

const TurfSection = () => {

  const navigate = useNavigate();

  const [turfs, setTurfs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTurfs();
  }, []);

  const fetchTurfs = async () => {
    try {

      const data = await getAllTurfs();

      setTurfs(data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }
  };

  return (

    <section className="bg-gradient-to-b from-white to-gray-100 py-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="flex justify-between items-center mb-12">

          <div>

            <h2 className="text-5xl font-bold text-gray-900">

              Popular Near You

            </h2>

            <p className="text-gray-500 mt-3">

              Discover the best sports turfs around your location.

            </p>

          </div>

          <button

            onClick={() => navigate("/turfs")}

            className="border border-green-600 text-green-600 px-6 py-3 rounded-full hover:bg-green-600 hover:text-white transition"

          >

            View All

          </button>

        </div>

        {/* Loading */}

        {

          loading ? (

            <div className="flex justify-center items-center py-20">

              <h2 className="text-2xl font-semibold text-gray-500">

                Loading Turfs...

              </h2>

            </div>

          ) : turfs.length === 0 ? (

            <div className="text-center py-20">

              <h2 className="text-3xl font-bold text-gray-700">

                No Turfs Available

              </h2>

              <p className="text-gray-500 mt-3">

                Please add some turfs from the backend.

              </p>

            </div>

          ) : (

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {

                turfs.slice(0, 6).map((turf) => (

                  <TurfCard

                    key={turf.turfId}

                    turf={turf}

                  />

                ))

              }

            </div>

          )

        }

      </div>

    </section>

  );

};

export default TurfSection;