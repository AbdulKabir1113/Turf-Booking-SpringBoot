import {
  Car,
  Lightbulb,
  Bath,
  Shirt,
  Wifi,
  ShieldCheck,
  Droplets,
  Coffee,
} from "lucide-react";

const Amenities = () => {

  const amenities = [
    { icon: <Car size={20} />, name: "Parking" },
    { icon: <Lightbulb size={20} />, name: "Floodlights" },
    { icon: <Bath size={20} />, name: "Washroom" },
    { icon: <Shirt size={20} />, name: "Changing Room" },
    { icon: <Wifi size={20} />, name: "Free WiFi" },
    { icon: <Coffee size={20} />, name: "Refreshments" },
    { icon: <Droplets size={20} />, name: "Drinking Water" },
    { icon: <ShieldCheck size={20} />, name: "24x7 Security" },
  ];

  return (
    <section className="bg-white py-8">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-6">
          Amenities
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

          {amenities.map((item, index) => (

            <div
              key={index}
              className="border rounded-2xl p-5 flex flex-col items-center gap-3 hover:bg-green-50 hover:border-green-600 transition"
            >
              <div className="text-green-600">
                {item.icon}
              </div>

              <span className="font-medium">
                {item.name}
              </span>
            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Amenities;