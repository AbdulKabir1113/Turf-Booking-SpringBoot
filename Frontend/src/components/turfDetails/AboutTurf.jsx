import { useState } from "react";

const AboutTurf = ({ turf }) => {

  const [readMore, setReadMore] = useState(false);

  const description =
    turf?.description ||
    "No description available.";

  return (

    <section className="bg-white py-10">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-6">

          About This Turf

        </h2>

        <p className="text-gray-600 leading-8 text-lg">

          {
            readMore
              ? description
              : description.length > 220
                ? description.substring(0, 220) + "..."
                : description
          }

        </p>

        {
          description.length > 220 && (

            <button
              onClick={() => setReadMore(!readMore)}
              className="mt-5 text-green-600 font-semibold hover:text-green-700"
            >

              {readMore ? "Read Less" : "Read More"}

            </button>

          )
        }

      </div>

    </section>

  );

};

export default AboutTurf;