import { CalendarDays, Clock3, IndianRupee } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BookingSummary = ({
    turf,
    selectedDate,
    selectedSlots,
    pricePerHour
}) => {

    const navigate = useNavigate();

    const totalHours = selectedSlots.length;

    const totalAmount = totalHours * pricePerHour;

    const handleProceed = () => {

    if (selectedSlots.length === 0) {

        alert("Please select at least one slot.");

        return;

    }

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {

        navigate("/login", {
            state: {
                redirectTo: "/payment",
                bookingData: {
                    turf,
                    selectedDate,
                    selectedSlots,
                    totalAmount,
                },
            },
        });

        return;
    }

    navigate("/payment", {
        state: {
            turf,
            selectedDate,
            selectedSlots,
            totalAmount,
        },
    });

};

    return (

        <div className="sticky bottom-0 bg-white border-t shadow-2xl mt-10">

            <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col lg:flex-row justify-between items-center gap-6">

                {/* Left */}

                <div className="flex flex-wrap gap-10">

                    <div>

                        <p className="flex items-center gap-2 text-gray-500">

                            <CalendarDays size={18} />

                            Date

                        </p>

                        <h3 className="font-bold text-lg">

                            {selectedDate.toDateString()}

                        </h3>

                    </div>

                    <div>

                        <p className="flex items-center gap-2 text-gray-500">

                            <Clock3 size={18} />

                            Hours

                        </p>

                        <h3 className="font-bold text-lg">

                            {totalHours}

                        </h3>

                    </div>

                    <div>

                        <p className="text-gray-500">

                            Slots

                        </p>

                        <div className="flex flex-wrap gap-2 mt-2">

                            {

                                selectedSlots.length === 0

                                    ?

                                    <span className="text-gray-400">

                                        No Slot Selected

                                    </span>

                                    :

                                    selectedSlots.map((slot) => (

                                        <span
                                            key={slot.id}
                                            className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm"
                                        >

                                            {slot.time}

                                        </span>

                                    ))

                            }

                        </div>

                    </div>

                    <div>

                        <p className="flex items-center gap-2 text-gray-500">

                            <IndianRupee size={18} />

                            Total

                        </p>

                        <h2 className="text-3xl font-bold text-green-600">

                            ₹{totalAmount}

                        </h2>

                    </div>

                </div>

                {/* Right */}

                <button

                    onClick={handleProceed}

                    className={`px-10 py-4 rounded-xl font-semibold text-lg transition

                    ${

                        totalHours > 0

                            ?

                            "bg-green-600 hover:bg-green-700 text-white"

                            :

                            "bg-gray-300 text-gray-500 cursor-not-allowed"

                    }`}

                >

                    Proceed To Payment

                </button>

            </div>

        </div>

    );

};

export default BookingSummary;