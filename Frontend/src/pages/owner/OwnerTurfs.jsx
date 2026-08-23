import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getOwnerTurfs } from "../../services/ownerService";
import OwnerTurfCard from "../../components/owner/OwnerTurfCard";

const OwnerTurfs = () => {

  const user = JSON.parse(localStorage.getItem("user"));

  const [turfs, setTurfs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTurfs();
  }, []);

  const fetchTurfs = async () => {

    const data = await getOwnerTurfs(user.userId);

    setTurfs(data);
    setLoading(false);

  };

  return (

    <div className="min-h-screen bg-gray-100 p-8">

      <div className="flex justify-between items-center mb-8">

        <div>

          <h1 className="text-4xl font-bold">
            My Turfs
          </h1>

          <p className="text-gray-500 mt-2">
            Manage all your turfs.
          </p>

        </div>

        <Link
          to="/owner/add-turf"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold"
        >
          + Add Turf
        </Link>

      </div>

      {

        loading ? (

          <div className="text-center text-2xl font-semibold py-20">

            Loading...

          </div>

        ) : turfs.length === 0 ? (

          <div className="bg-white rounded-2xl shadow p-16 text-center">

            <h2 className="text-3xl font-bold">

              No Turfs Found

            </h2>

            <p className="text-gray-500 mt-3">

              Click Add Turf to create your first turf.

            </p>

          </div>

        ) : (

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {

              turfs.map((turf) => (

                <OwnerTurfCard
                  key={turf.turfId}
                  turf={turf}
                  refresh={fetchTurfs}
                />

              ))

            }

          </div>

        )

      }

    </div>

  );

};

export default OwnerTurfs;