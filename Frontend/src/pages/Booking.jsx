import { useEffect, useState } from "react";
import { useLocation, Navigate } from "react-router-dom";

import BookingHeader from "../components/booking/BookingHeader";
import DateSelector from "../components/booking/DateSelector";
import SlotLegend from "../components/booking/SlotLegend";
import SlotSection from "../components/booking/SlotSection";
import BookingSummary from "../components/booking/BookingSummary";

import { getBookedSlots } from "../services/bookingService";

const Booking = () => {

    const { state } = useLocation();

    const turf = state?.turf;

    if (!turf) {

        return <Navigate to="/" replace />;

    }

    const [selectedDate, setSelectedDate] = useState(new Date());

    const [selectedSlots, setSelectedSlots] = useState([]);

    const [bookedSlots, setBookedSlots] = useState([]);

    useEffect(() => {

        fetchBookedSlots();

    }, [selectedDate]);

    const fetchBookedSlots = async () => {

        const bookingDate = selectedDate
            .toISOString()
            .split("T")[0];

        const data = await getBookedSlots(
            turf.turfId,
            bookingDate
        );

        setBookedSlots(data);

    };

    return (

        <div className="min-h-screen bg-gray-100 py-8">

            <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">

                <BookingHeader turf={turf} />

                <DateSelector
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                />

                <SlotLegend />

                <SlotSection
                    title="Morning"
                    startHour={6}
                    endHour={12}
                    bookedSlots={bookedSlots}
                    selectedSlots={selectedSlots}
                    setSelectedSlots={setSelectedSlots}
                />

                <SlotSection
                    title="Evening"
                    startHour={17}
                    endHour={23}
                    bookedSlots={bookedSlots}
                    selectedSlots={selectedSlots}
                    setSelectedSlots={setSelectedSlots}
                />

                <BookingSummary
                    turf={turf}
                    selectedDate={selectedDate}
                    selectedSlots={selectedSlots}
                    pricePerHour={turf.pricePerHour}
                />

            </div>

        </div>

    );

};

export default Booking;