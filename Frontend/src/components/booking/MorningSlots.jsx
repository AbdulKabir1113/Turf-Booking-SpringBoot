const morningSlots = [
  {
    id: 1,
    time: "06:00:00 - 07:00:00",
  },
  {
    id: 2,
    time: "07:00:00 - 08:00:00",
  },
  {
    id: 3,
    time: "08:00:00 - 09:00:00",
  },
  {
    id: 4,
    time: "09:00:00 - 10:00:00",
  },
  {
    id: 5,
    time: "10:00:00 - 11:00:00",
  },
  {
    id: 6,
    time: "11:00:00 - 12:00:00",
  },
];

const MorningSlots = ({
  selectedSlot,
  setSelectedSlot,
  bookedSlots,
}) => {

  return (

    <div className="px-8 mt-10">

      <h2 className="text-2xl font-bold mb-6">
        Morning
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

        {morningSlots.map((slot) => {

          const isBooked = bookedSlots.includes(slot.time);

          return (

            <button
              key={slot.id}
              disabled={isBooked}
              onClick={() => setSelectedSlot(slot)}
              className={`py-4 rounded-xl font-semibold transition-all duration-300

              ${
                isBooked
                  ? "bg-red-100 text-red-500 cursor-not-allowed"
                  : selectedSlot?.id === slot.id
                  ? "bg-green-600 text-white"
                  : "bg-green-100 hover:bg-green-200"
              }
              `}
            >

              {slot.time}

            </button>

          );

        })}

      </div>

    </div>

  );

};

export default MorningSlots;