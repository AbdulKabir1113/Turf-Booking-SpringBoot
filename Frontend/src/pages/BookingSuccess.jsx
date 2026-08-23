import { useLocation, useNavigate } from "react-router-dom";
import {
  CheckCircle,
  CalendarDays,
  MapPin,
  IndianRupee,
  Clock3,
  Home,
  ClipboardList,
} from "lucide-react";

const BookingSuccess = () => {

  const navigate = useNavigate();
  const { state } = useLocation();

  if (!state) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-3xl font-bold">
          No Booking Found
        </h1>
      </div>
    );
  }

  const {
    bookingId,
    turf,
    selectedDate,
    selectedSlots,
    totalAmount,
  } = state;

  const turfName = turf.turfName;
  const turfLocation = `${turf.location}, ${turf.city}`;
  const turfImage = turf.thumbnailUrl;

  return (
    <div className="min-h-screen bg-gray-100 py-10">

      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">

        {/* Header */}

        <div className="border-b px-6 py-5 flex items-center gap-4">

          <button
            onClick={() => navigate("/")}
            className="text-2xl"
          >
            ←
          </button>

          <h1 className="text-2xl font-bold">
            Booking Confirmed
          </h1>

        </div>

        <div className="p-10">

          {/* Success */}

          <div className="flex flex-col items-center">

            <CheckCircle
              size={90}
              className="text-green-600"
            />

            <h2 className="text-4xl font-bold mt-6 text-green-700">
              Booking Confirmed
            </h2>

            <p className="text-gray-500 mt-3">
              Your slot has been booked successfully.
            </p>

            <div className="mt-6 bg-gray-100 px-6 py-3 rounded-xl">

              <span className="font-semibold">
                Booking ID :
              </span>

              <span className="ml-2 font-bold">
                TB{bookingId}
              </span>

            </div>

          </div>

          {/* Turf Card */}

          <div className="mt-8 flex gap-4 items-center bg-green-50 rounded-2xl p-4">

            <img
              src={turfImage}
              alt={turfName}
              className="w-24 h-24 rounded-xl object-cover"
            />

            <div>

              <h3 className="text-2xl font-bold">
                {turfName}
              </h3>

              <div className="flex items-center gap-2 text-gray-600 mt-2">

                <MapPin size={18} />

                {turfLocation}

              </div>

            </div>

          </div>

          {/* Booking Details */}

          <div className="mt-8 bg-gray-50 rounded-2xl p-6">

            <div className="space-y-5">

              <div className="flex justify-between">

                <div className="flex items-center gap-2">

                  <CalendarDays size={18} />

                  Booking Date

                </div>

                <span className="font-semibold">

                  {selectedDate.toDateString()}

                </span>

              </div>

              <div className="flex justify-between">

                <div className="flex items-center gap-2">

                  <Clock3 size={18} />

                  Slots

                </div>

                <div className="text-right">

                  {selectedSlots.map((slot) => (

                    <div
                      key={slot.id}
                      className="font-semibold"
                    >

                      {slot.time}

                    </div>

                  ))}

                </div>

              </div>

              <div className="flex justify-between">

                <div className="flex items-center gap-2">

                  <IndianRupee size={18} />

                  Total Paid

                </div>

                <span className="text-2xl font-bold text-green-600">

                  ₹{totalAmount}

                </span>

              </div>

            </div>

          </div>

          {/* Success Message */}

          <div className="mt-8 bg-green-100 border border-green-300 rounded-2xl p-5">

            <div className="flex gap-3">

              <CheckCircle
                size={28}
                className="text-green-700"
              />

              <div>

                <h3 className="font-bold text-green-700">

                  Booking Successful

                </h3>

                <p className="text-green-700 text-sm">

                  Your booking has been confirmed successfully.
                  You can view all your bookings anytime.

                </p>

              </div>

            </div>

          </div>

          {/* Buttons */}

          <div className="grid grid-cols-2 gap-4 mt-8">

            <button
              onClick={() => navigate("/my-bookings")}
              className="bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold flex justify-center items-center gap-2"
            >

              <ClipboardList size={20} />

              View My Bookings

            </button>

            <button
              onClick={() => navigate("/")}
              className="border border-gray-300 hover:bg-gray-100 py-4 rounded-xl font-semibold flex justify-center items-center gap-2"
            >

              <Home size={20} />

              Back To Home

            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default BookingSuccess;