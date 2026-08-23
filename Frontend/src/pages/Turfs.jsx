import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import TurfCard from "../components/TurfCard";
import { getAllTurfs } from "../services/turfService";

const Turfs = () => {

  const [turfs, setTurfs] = useState([]);
  const [filteredTurfs, setFilteredTurfs] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTurfs();
  }, []);

  useEffect(() => {

    if (search.trim() === "") {

      setFilteredTurfs(turfs);

    } else {

      const result = turfs.filter((turf) =>
        turf.turfName.toLowerCase().includes(search.toLowerCase()) ||
        turf.city.toLowerCase().includes(search.toLowerCase()) ||
        turf.location.toLowerCase().includes(search.toLowerCase())
      );

      setFilteredTurfs(result);

    }

  }, [search, turfs]);

  const fetchTurfs = async () => {

    try {

      const data = await getAllTurfs();

      setTurfs(data);
      setFilteredTurfs(data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="min-h-screen bg-gray-100">

      {/* Header */}

      <div className="bg-green-600 py-10">

        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl font-bold text-white">

            All Turfs

          </h1>

          <p className="text-green-100 mt-3">

            Find and book your favourite turf.

          </p>

        </div>

      </div>

      {/* Search */}

      <div className="max-w-7xl mx-auto px-6 mt-8">

        <input
          type="text"
          placeholder="Search by Turf Name, City or Location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border rounded-xl px-5 py-4 text-lg outline-none focus:border-green-600"
        />

      </div>

      {/* Turf List */}

      <div className="max-w-7xl mx-auto px-6 py-10">

        {

          loading ?

          (

            <div className="text-center text-2xl">

              Loading...

            </div>

          )

          :

          filteredTurfs.length === 0 ?

          (

            <div className="text-center text-2xl font-semibold">

              No Turf Found

            </div>

          )

          :

          (

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {

                filteredTurfs.map((turf) => (

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

    </div>

  );

};

export default Turfs;