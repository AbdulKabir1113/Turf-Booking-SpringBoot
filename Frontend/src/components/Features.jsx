import {
  CalendarCheck,
  ShieldCheck,
  Clock3,
  Star,
} from "lucide-react";

const features = [

  {
    icon: <CalendarCheck size={40} />,
    title: "Instant Booking",
    description: "Book your favourite turf in just a few clicks."
  },

  {
    icon: <Clock3 size={40} />,
    title: "Live Slot Availability",
    description: "See available slots in real time."
  },

  {
    icon: <ShieldCheck size={40} />,
    title: "Secure Payments",
    description: "100% secure online payment experience."
  },

  {
    icon: <Star size={40} />,
    title: "Verified Turfs",
    description: "Play only on trusted and verified grounds."
  }

];

const Features = () => {

  return (

    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-3">

          Why Choose TurfHub?

        </h2>

        <p className="text-center text-gray-500 mb-12">

          Everything you need for a hassle-free sports booking experience.

        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {

            features.map((item,index)=>(

              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300"
              >

                <div className="w-20 h-20 rounded-full bg-green-100 text-green-700 flex justify-center items-center mx-auto">

                  {item.icon}

                </div>

                <h3 className="text-xl font-bold mt-6">

                  {item.title}

                </h3>

                <p className="text-gray-500 mt-3">

                  {item.description}

                </p>

              </div>

            ))

          }

        </div>

      </div>

    </section>

  );

}

export default Features;