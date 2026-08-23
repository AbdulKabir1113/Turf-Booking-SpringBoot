const SlotLegend = () => {

    return (

        <div className="px-8 mt-8">

            <div className="flex flex-wrap gap-8">

                {/* Available */}

                <div className="flex items-center gap-3">

                    <div className="w-5 h-5 rounded bg-green-100 border border-green-300"></div>

                    <span className="text-gray-700 font-medium">

                        Available

                    </span>

                </div>

                {/* Selected */}

                <div className="flex items-center gap-3">

                    <div className="w-5 h-5 rounded bg-green-600"></div>

                    <span className="text-gray-700 font-medium">

                        Selected

                    </span>

                </div>

                {/* Booked */}

                <div className="flex items-center gap-3">

                    <div className="w-5 h-5 rounded bg-red-100 border border-red-300"></div>

                    <span className="text-gray-700 font-medium">

                        Booked

                    </span>

                </div>

            </div>

        </div>

    );

};

export default SlotLegend;