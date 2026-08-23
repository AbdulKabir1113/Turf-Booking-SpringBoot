const DateSelector = ({ selectedDate, setSelectedDate }) => {

    const dates = [];

    for (let i = 0; i < 7; i++) {

        const d = new Date();

        d.setDate(d.getDate() + i);

        dates.push(d);
    }

    return (

        <div className="px-8 pt-8">

            <h2 className="text-2xl font-bold mb-6">

                Select Date

            </h2>

            <div className="flex gap-4 overflow-x-auto pb-2">

                {

                    dates.map((date, index) => (

                        <button

                            key={index}

                            onClick={() => setSelectedDate(date)}

                            className={`min-w-[90px] rounded-2xl border p-4 transition-all duration-300

                            ${
                                selectedDate.toDateString() === date.toDateString()

                                    ? "bg-green-600 text-white border-green-600"

                                    : "bg-white hover:bg-gray-100"
                            }`}

                        >

                            <p className="text-sm">

                                {

                                    index === 0

                                        ? "Today"

                                        : date.toLocaleDateString("en-US", {
                                            weekday: "short",
                                        })

                                }

                            </p>

                            <h3 className="text-2xl font-bold mt-2">

                                {date.getDate()}

                            </h3>

                            <p className="text-sm mt-1">

                                {

                                    date.toLocaleDateString("en-US", {
                                        month: "short",
                                    })

                                }

                            </p>

                        </button>

                    ))

                }

            </div>

        </div>

    );

};

export default DateSelector;