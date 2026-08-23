const eveningSlots = [
  {
    id: 7,
    time: "05:00:00 - 06:00:00",
  },
  {
    id: 8,
    time: "06:00:00 - 07:00:00",
  },
  {
    id: 9,
    time: "07:00:00 - 08:00:00",
  },
  {
    id: 10,
    time: "08:00:00 - 09:00:00",
  },
  {
    id: 11,
    time: "09:00:00 - 10:00:00",
  },
  {
    id: 12,
    time: "10:00:00 - 11:00:00",
  },
];

const EveningSlots = ({
  selectedSlot,
  setSelectedSlot,
  bookedSlots,
}) => {

  return (

    <div className="px-8 mt-12">

      <h2 className="text-2xl font-bold mb-6">
        Evening
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

        {eveningSlots.map((slot) => {

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

export default EveningSlots;