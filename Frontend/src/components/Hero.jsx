import { Search } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-[#111111] text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="max-w-3xl">

          <h1 className="text-5xl font-bold leading-tight">
            Book the best sports
            <br />
            turfs near you
          </h1>

          <p className="mt-4 text-lg text-gray-300">
            Cricket, Football, Badminton and more
          </p>

          {/* Search */}

          <div className="mt-10 flex gap-3">

            <div className="relative flex-1">

              <Search
                size={20}
                className="absolute left-4 top-4 text-gray-400"
              />

              <input
                type="text"
                placeholder="Search turf, area or city"
                className="w-full h-14 rounded-xl pl-12 pr-4 text-black bg-white outline-none"
              />

            </div>

            <button
              className="bg-green-600 hover:bg-green-700 px-8 rounded-xl font-semibold transition"
            >
              Search
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;