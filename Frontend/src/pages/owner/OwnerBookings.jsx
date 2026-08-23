import { useEffect, useState } from "react";
import { getOwnerBookings } from "../../services/ownerService";

const OwnerBookings = () => {

  const user = JSON.parse(localStorage.getItem("user"));

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetchBookings();

  }, []);

  const fetchBookings = async () => {

    const data = await getOwnerBookings(user.userId);

    setBookings(data);

    setLoading(false);

  };

  if (loading) {

    return (

      <div className="flex justify-center items-center h-screen text-2xl">

        Loading...

      </div>

    );

  }

  return (

    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold mb-8">

        Owner Bookings

      </h1>

      {

        bookings.length === 0 ?

        (

          <div className="bg-white rounded-xl shadow p-12 text-center">

            <h2 className="text-2xl font-bold">

              No Bookings Found

            </h2>

          </div>

        )

        :

        (

          <div className="bg-white rounded-xl shadow overflow-x-auto">

            <table className="w-full">

              <thead>

                <tr className="bg-green-600 text-white">

                  <th className="p-4">Customer</th>

                  <th className="p-4">Phone</th>

                  <th className="p-4">Turf</th>

                  <th className="p-4">Date</th>

                  <th className="p-4">Time</th>

                  <th className="p-4">Amount</th>

                  <th className="p-4">Status</th>

                </tr>

              </thead>

              <tbody>

                {

                  bookings.map((booking) => (

                    <tr
                      key={booking.bookingId}
                      className="border-b hover:bg-gray-50 text-center"
                    >

                      <td className="p-4">

                        {booking.customerName}

                      </td>

                      <td className="p-4">

                        {booking.customerPhone}

                      </td>

                      <td className="p-4">

                        {booking.turfName}

                      </td>

                      <td className="p-4">

                        {booking.bookingDate}

                      </td>

                      <td className="p-4">

                        {booking.slotStart} - {booking.slotEnd}

                      </td>

                      <td className="p-4">

                        ₹{booking.totalAmount}

                      </td>

                     <td className="p-4">

  <span
    className={`px-3 py-1 rounded-full text-white text-sm font-semibold
    ${
      booking.bookingStatus === "CONFIRMED"
        ? "bg-green-600"
        : booking.bookingStatus === "CANCELLED"
        ? "bg-red-600"
        : booking.bookingStatus === "PENDING"
        ? "bg-yellow-500"
        : "bg-blue-600"
    }`}
  >
    {booking.bookingStatus}
  </span>

</td>

                    </tr>

                  ))

                }

              </tbody>

            </table>

          </div>

        )

      }

    </div>

  );

};

export default OwnerBookings;