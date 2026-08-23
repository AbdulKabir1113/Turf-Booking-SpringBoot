import { useEffect, useState } from "react";

import { getOwnerDashboard } from "../../services/ownerService";
import OwnerNavbar from "../../components/owner/OwnerNavbar";

const OwnerDashboard = () => {

  const user = JSON.parse(localStorage.getItem("user"));

  const [dashboard, setDashboard] = useState(null);

  useEffect(() => {

    fetchDashboard();

  }, []);

  const fetchDashboard = async () => {

    const data = await getOwnerDashboard(user.userId);

    setDashboard(data);

  };

  if (!dashboard) {

    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );

  }

  return (

    <div className="min-h-screen bg-gray-100 p-8">

      <div className="flex justify-between items-center mb-8">

  <div>

    <h1 className="text-4xl font-bold">
      Owner Dashboard
    </h1>

    <p className="text-gray-500 mt-2">
      Welcome, {user.fullName}
    </p>

  </div>

  <OwnerNavbar />

</div>

      {/* Cards */}

      <div className="grid grid-cols-4 gap-6 mb-10">

        <div className="bg-white rounded-2xl shadow p-6">

          <p className="text-gray-500">

            Total Turfs

          </p>

          <h2 className="text-4xl font-bold text-green-600 mt-3">

            {dashboard.totalTurfs}

          </h2>

        </div>

        <div className="bg-white rounded-2xl shadow p-6">

          <p className="text-gray-500">

            Today's Bookings

          </p>

          <h2 className="text-4xl font-bold text-blue-600 mt-3">

            {dashboard.todaysBookings}

          </h2>

        </div>

        <div className="bg-white rounded-2xl shadow p-6">

          <p className="text-gray-500">

            Upcoming Bookings

          </p>

          <h2 className="text-4xl font-bold text-orange-600 mt-3">

            {dashboard.upcomingBookings}

          </h2>

        </div>

        <div className="bg-white rounded-2xl shadow p-6">

          <p className="text-gray-500">

            Total Revenue

          </p>

          <h2 className="text-4xl font-bold text-purple-600 mt-3">

            ₹{dashboard.totalRevenue}

          </h2>

        </div>

      </div>

      {/* Recent Bookings */}

      <div className="bg-white rounded-2xl shadow">

        <div className="p-6 border-b">

          <h2 className="text-2xl font-bold">

            Recent Bookings

          </h2>

        </div>

        <table className="w-full">

          <thead>

            <tr className="bg-gray-100">

              <th className="p-4 text-left">

                Customer

              </th>

              <th className="p-4 text-left">

                Turf

              </th>

              <th className="p-4 text-left">

                Date

              </th>

              <th className="p-4 text-left">

                Time

              </th>

              <th className="p-4 text-left">

                Amount

              </th>

              <th className="p-4 text-left">

                Status

              </th>

            </tr>

          </thead>

          <tbody>

            {

              dashboard.recentBookings.map((booking, index) => (

                <tr
                  key={index}
                  className="border-t"
                >

                  <td className="p-4">

                    {booking.customerName}

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

                    {booking.bookingStatus}

                  </td>

                </tr>

              ))

            }

          </tbody>

        </table>

      </div>

    </div>

  );

};

export default OwnerDashboard;
