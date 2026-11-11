function CircuitInfo({ race }) {
    return (
        <div className="bg-[#151515] text-white rounded-xl p-6 border border-gray-700 flex-1">

            <div className="flex items-center gap-6">

                <img
                    src={race.circuit_image}
                    className="w-6/10 h-40 object-contain"
                />
                <div className="w-1 h-16 bg-red-600 rounded-full"></div>

                <div>
                    <h2 className="text-lg font-bold">
                        {race.circuit_short_name}
                    </h2>
                </div>

            </div>

        </div>
    )
}

export default CircuitInfo