import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  CalendarDays,
  Clock3,
  CreditCard,
  Landmark,
  Wallet,
  BadgeIndianRupee,
  TicketPercent,
  CircleDollarSign,
} from "lucide-react";

import { bookSlot } from "../services/bookingService";

const Payment = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const user = JSON.parse(localStorage.getItem("user"));

if (!user) {
  navigate("/login");
  return null;
}

  const [loading, setLoading] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("UPI");

  if (!state) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-3xl font-bold">No Booking Selected</h1>
      </div>
    );
  }

  const {
  turf,
  selectedDate,
  selectedSlots,
  totalAmount,
} = state;

const turfId = turf.turfId;
const turfName = turf.turfName;
const turfLocation = `${turf.location}, ${turf.city}`;
const turfImage = turf.thumbnailUrl;

  const taxes = Math.round(totalAmount * 0.05);
  const grandTotal = totalAmount + taxes;

  const duration = `${selectedSlots.length} Slot${selectedSlots.length > 1 ? "s" : ""}`;
  const slotText = selectedSlots.map((slot) => slot.time).join(", ");

  const paymentMethods = [
    { id: "UPI", label: "UPI", icon: BadgeIndianRupee, color: "text-green-600" },
    { id: "Card", label: "Card", icon: CreditCard, color: "text-blue-600" },
    { id: "NetBanking", label: "Net Banking", icon: Landmark, color: "text-orange-600" },
    { id: "Wallet", label: "Wallet", icon: Wallet, color: "text-purple-600" },
  ];

  const handlePayment = async () => {
    setLoading(true);

    try {
      const bookingData = {
  userId: 1, // Replace with logged-in user later
  turfId: turf.turfId,
  bookingDate: selectedDate.toISOString().split("T")[0],
  totalAmount: grandTotal,
  paymentMethod,
  slots: selectedSlots.map((slot) => {
    const [slotStart, slotEnd] = slot.time.split(" - ");
    return {
      slotStart,
      slotEnd,
    };
  }),
};

      console.log(bookingData);

      const response = await bookSlot(bookingData);

      if (response.success) {
        navigate("/booking-success", {
  state: {
    bookingId: Math.floor(Math.random() * 100000),
    turf,
    selectedDate,
    selectedSlots,
    totalAmount: grandTotal,
  },
});
      } else {
        alert(response.message);
      }
    } catch (err) {
      console.log(err);
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="border-b px-8 py-5 flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="text-green-600 font-semibold">
            ← Back
          </button>
          <h1 className="text-2xl font-bold">Booking Summary</h1>
        </div>

        <div className="p-8">
          {/* Turf Card */}
          <div className="flex gap-5 items-center mb-2">
            <img
              src={turfImage || "https://placehold.co/100x100?text=Turf"}
              alt={turfName}
              className="w-24 h-24 rounded-2xl object-cover"
            />
            <div>
              <h2 className="text-2xl font-bold">{turfName}</h2>
              <p className="text-gray-500">{turfLocation}</p>
            </div>
          </div>

          {/* Booking count */}
          <p className="text-green-600 font-medium mb-6">
            {selectedSlots.length} Slot{selectedSlots.length > 1 ? "s" : ""} Selected
          </p>

          {/* Booking Details */}
          <div className="bg-gray-50 rounded-2xl p-6 mb-8">
            <div className="flex justify-between mb-4">
              <div className="flex gap-3 items-center">
                <CalendarDays size={20} />
                <span>Date</span>
              </div>
              <span className="font-semibold">{selectedDate.toDateString()}</span>
            </div>

            <div className="flex justify-between mb-4">
              <div className="flex gap-3 items-center">
                <Clock3 size={20} />
                <span>Time</span>
              </div>
              <span className="font-semibold text-right">{slotText}</span>
            </div>

            <div className="flex justify-between">
              <div className="flex gap-3 items-center">
                <Clock3 size={20} />
                <span>Duration</span>
              </div>
              <span className="font-semibold">{duration}</span>
            </div>
          </div>

          {/* Price Summary */}
          <div className="space-y-4 border-b pb-6">
            <div className="flex justify-between">
              <span>Price</span>
              <span>₹{totalAmount}</span>
            </div>
            <div className="flex justify-between">
              <span>Taxes & Fees</span>
              <span>₹{taxes}</span>
            </div>
            <div className="flex justify-between text-2xl font-bold pt-2">
              <span>Total Amount</span>
              <span className="text-green-600">₹{grandTotal}</span>
            </div>
          </div>

          {/* Promo Code */}
          <div className="mt-8">
            <label className="block text-lg font-semibold mb-3">Promo Code</label>
            <div className="flex gap-3">
              <input
                type="text"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                placeholder="Enter promo code"
                className="flex-1 border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 rounded-xl font-semibold">
                Apply
              </button>
            </div>
          </div>

          {/* Payment Method */}
          <div className="mt-10">
            <h2 className="text-xl font-bold mb-5">Choose Payment Method</h2>
            <div className="grid grid-cols-2 gap-5">
              {paymentMethods.map(({ id, label, icon: Icon, color }) => (
                <button
                  key={id}
                  onClick={() => setPaymentMethod(id)}
                  className={`border rounded-2xl p-5 transition ${
                    paymentMethod === id
                      ? "border-green-600 bg-green-50"
                      : "hover:border-green-600"
                  }`}
                >
                  <div className="flex flex-col items-center gap-3">
                    <Icon size={34} className={color} />
                    <span className="font-semibold">{label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Secure Payment */}
          <div className="mt-10 bg-green-50 border border-green-200 rounded-2xl p-5">
            <div className="flex items-center gap-4">
              <CircleDollarSign size={40} className="text-green-600" />
              <div>
                <h3 className="font-bold text-lg">Secure Checkout</h3>
                <p className="text-gray-600">
                  SSL Encrypted • Safe Payment • Instant Booking Confirmation
                </p>
              </div>
            </div>
          </div>

          {/* Coupon Note */}
          <div className="mt-6 flex items-center gap-3 text-gray-600">
            <TicketPercent size={20} className="text-green-600" />
            <p>Have a coupon? Apply it above before making payment.</p>
          </div>

          {/* Pay Button */}
          <button
            onClick={handlePayment}
            disabled={loading}
            className="w-full mt-10 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white py-4 rounded-2xl text-xl font-bold transition"
          >
            {loading ? "Processing Payment..." : `Pay ₹${grandTotal}`}
          </button>

          {/* Footer */}
          <p className="text-center text-gray-400 text-sm mt-6">
            By proceeding, you agree to our Terms & Conditions and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Payment;