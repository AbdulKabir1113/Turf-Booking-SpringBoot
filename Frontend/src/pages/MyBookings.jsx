import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getMyBookings, cancelBooking } from "../services/bookingService";

const MyBookings = () => {
  const navigate = useNavigate();

  const [bookings, setBookings] = useState([]);
  const [activeTab, setActiveTab] = useState("Upcoming");

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    const data = await getMyBookings(1); // TODO: replace 1 with logged-in user id from AuthContext
    setBookings(data);
  };

  const handleCancelBooking = async (bookingId) => {
    const confirmCancel = window.confirm("Are you sure you want to cancel this booking?");
    if (!confirmCancel) return;

    const response = await cancelBooking(bookingId);

    if (response.success) {
      alert("Booking Cancelled Successfully");
      fetchBookings();
    } else {
      alert(response.message);
    }
  };

  // Map tab names to actual booking_status values from your bookings table
  const statusForTab = {
    Upcoming: "CONFIRMED",
    Completed: "COMPLETED",
    Cancelled: "CANCELLED",
  };

  const filteredBookings = bookings.filter(
    (booking) => booking.bookingStatus === statusForTab[activeTab]
  );

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center gap-4 border-b px-8 py-5">
          <button onClick={() => navigate(-1)}>
            <ArrowLeft size={26} />
          </button>
          <h1 className="text-3xl font-bold">My Bookings</h1>
        </div>

        {/* Tabs */}
        <div className="flex gap-10 px-8 py-5 border-b">
          {["Upcoming", "Completed", "Cancelled"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-semibold text-lg pb-2 ${
                activeTab === tab
                  ? "text-green-600 border-b-2 border-green-600"
                  : "text-gray-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Booking List */}
        <div className="p-8 space-y-6">
          {filteredBookings.length === 0 ? (
            <div className="text-center text-gray-500 py-20">
              No {activeTab} Bookings Found
            </div>
          ) : (
            filteredBookings.map((booking) => (
              <div
                key={booking.bookingId}
                className="border rounded-2xl p-6 hover:shadow-lg transition"
              >
                <div className="flex justify-between">
                  <div className="flex gap-5">
                    <img
                      src={booking.thumbnailUrl || "https://placehold.co/100x100?text=Turf"}
                      alt={booking.turfName || "Turf"}
                      className="w-24 h-24 rounded-2xl object-cover"
                    />

                    <div>
                      <h2 className="text-2xl font-bold">
                        {booking.turfName || "Greenfield Arena"}
                      </h2>
                      <p className="text-gray-500">{booking.turfLocation}, {booking.city}</p>
                      <p className="mt-3">📅 {booking.bookingDate}</p>
                      <p>
                        🕒 {booking.slotStart} - {booking.slotEnd}
                      </p>
                      <p className="font-bold text-green-600 mt-2">₹{booking.totalAmount}</p>
                    </div>
                  </div>

                  <span
                    className={`px-4 py-2 rounded-full h-fit font-semibold ${
                      booking.bookingStatus === "CONFIRMED"
                        ? "bg-green-100 text-green-700"
                        : booking.bookingStatus === "CANCELLED"
                        ? "bg-red-100 text-red-700"
                        : booking.bookingStatus === "COMPLETED"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {booking.bookingStatus}
                  </span>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-6">
                  <button className="border px-5 py-2 rounded-xl hover:bg-gray-100">
                    View Details
                  </button>

                  {booking.bookingStatus === "CONFIRMED" && (
                    <button
                      onClick={() => handleCancelBooking(booking.bookingId)}
                      className="border border-red-500 text-red-600 px-5 py-2 rounded-xl hover:bg-red-50"
                    >
                      Cancel Booking
                    </button>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MyBookings;