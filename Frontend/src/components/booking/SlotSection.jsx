const SlotSection = ({
  title,
  startHour,
  endHour,
  bookedSlots,
  selectedSlots,
  setSelectedSlots,
}) => {

  // Convert 24-hour time to 12-hour AM/PM
  const formatTime = (time) => {

    let [hour, minute] = time.split(":");

    hour = parseInt(hour);

    const ampm = hour >= 12 ? "PM" : "AM";

    hour = hour % 12;

    if (hour === 0) hour = 12;

    return `${hour}:${minute} ${ampm}`;
  };

  // Generate slots
  const slots = [];

  for (let hour = startHour; hour < endHour; hour++) {

    const start = `${String(hour).padStart(2, "0")}:00:00`;

    const end = `${String(hour + 1).padStart(2, "0")}:00:00`;

    slots.push({
      id: hour,
      time: `${start} - ${end}`,
    });

  }

  // Select / Unselect slot
  const toggleSlot = (slot) => {

    if (bookedSlots.includes(slot.time)) return;

    const exists = selectedSlots.find(
      (item) => item.time === slot.time
    );

    if (exists) {

      setSelectedSlots(
        selectedSlots.filter(
          (item) => item.time !== slot.time
        )
      );

    } else {

      setSelectedSlots([
        ...selectedSlots,
        slot,
      ]);

    }

  };

  return (

    <div className="px-8 mt-10">

      <h2 className="text-2xl font-bold mb-6">

        {title}

      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

        {

          slots.map((slot) => {

            const isBooked = bookedSlots.includes(slot.time);

            const isSelected = selectedSlots.some(
              (item) => item.time === slot.time
            );

            const start = slot.time.split(" - ")[0];

            const end = slot.time.split(" - ")[1];

            return (

              <button

                key={slot.id}

                disabled={isBooked}

                onClick={() => toggleSlot(slot)}

                className={`rounded-2xl p-4 font-semibold transition-all duration-300 border

                ${
                  isBooked
                    ? "bg-red-100 border-red-300 text-red-600 cursor-not-allowed"

                    : isSelected
                    ? "bg-green-600 border-green-600 text-white"

                    : "bg-green-50 border-green-200 hover:bg-green-100"
                }

                `}

              >

                <div className="text-lg font-bold">

                  {formatTime(start)}

                </div>

                <div className="text-sm opacity-80 mt-1">

                  to

                </div>

                <div className="text-lg font-bold">

                  {formatTime(end)}

                </div>

              </button>

            );

          })

        }

      </div>

    </div>

  );

};

export default SlotSection;