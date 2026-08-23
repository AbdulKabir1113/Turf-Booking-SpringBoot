import { Star } from "lucide-react";

const reviews = [

  {
    id:1,
    name:"Rahul Sharma",
    city:"Hyderabad",
    review:"Amazing booking experience. The turf was exactly as shown in the photos.",
    rating:5
  },

  {
    id:2,
    name:"Aman Khan",
    city:"Pune",
    review:"Very easy to book slots and payment was smooth. Highly recommended.",
    rating:5
  },

  {
    id:3,
    name:"Vikram Patel",
    city:"Bangalore",
    review:"Found nearby football turfs within minutes. Great user experience.",
    rating:4
  }

];

const Testimonials = () => {

  return (

    <section className="bg-gray-100 py-20">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">

          What Our Players Say

        </h2>

        <p className="text-center text-gray-500 mt-3 mb-12">

          Trusted by thousands of sports lovers.

        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {

            reviews.map((review)=>(

              <div
                key={review.id}
                className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition"
              >

                <div className="flex gap-1 text-yellow-500">

                  {

                    [...Array(review.rating)].map((_,index)=>

                      <Star
                        key={index}
                        size={18}
                        fill="currentColor"
                      />

                    )

                  }

                </div>

                <p className="mt-5 text-gray-600">

                  "{review.review}"

                </p>

                <h3 className="font-bold text-xl mt-6">

                  {review.name}

                </h3>

                <span className="text-gray-500">

                  {review.city}

                </span>

              </div>

            ))

          }

        </div>

      </div>

    </section>

  );

}

export default Testimonials;