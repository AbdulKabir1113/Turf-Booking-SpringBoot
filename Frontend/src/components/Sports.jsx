import {
  Trophy,
  Goal,
  Volleyball,
  Dumbbell,
  ChevronRight,
} from "lucide-react";

const sports = [
  {
    name: "Cricket",
    icon: <Trophy size={32} />,
  },
  {
    name: "Football",
    icon: <Goal size={32} />,
  },
  {
    name: "Badminton",
    icon: <Volleyball size={32} />,
  },
  {
    name: "Fitness",
    icon: <Dumbbell size={32} />,
  },
];

const Sports = () => {
  return (
    <section className="bg-white py-12">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-3xl font-bold">
            Popular Sports
          </h2>

          <button className="flex items-center gap-2 text-green-600 font-semibold hover:gap-3 duration-300">
            View All
            <ChevronRight size={18} />
          </button>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {sports.map((sport, index) => (

            <div
              key={index}
              className="bg-white border rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 duration-300 cursor-pointer flex flex-col items-center"
            >

              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center text-green-700">

                {sport.icon}

              </div>

              <h3 className="mt-5 text-xl font-semibold">

                {sport.name}

              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Sports;