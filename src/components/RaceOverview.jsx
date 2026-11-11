function RaceOveriew(props){

    return(
        <div className="bg-[#151515] text-white rounded-xl p-6 border border-gray-700 flex-1">
            <h2 className="text-xl font-bold mb-4">Race Weekend</h2>


            <div className="grid grid-cols-2 gap-4">
                <div>
                    <p className="text-gray-400 text-sm">Circuit</p>
                    <p>{props.race.circuit_short_name}</p>
                </div>

                <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p>{props.race.location}</p>
                </div>

                <div>
                    <p className="text-gray-400 text-sm">Start Date</p>
                    <p>{new Date(props.race.date_start).toLocaleDateString()}</p>
                </div>

                <div>
                    <p className="text-gray-400 text-sm">End Date</p>
                    <p>{new Date(props.race.date_end).toLocaleDateString()}</p>
                </div>

                <div>
                    <p className="text-gray-400 text-sm">Circuit Type</p>
                    <p>{props.race.circuit_type}</p>
                </div>

                <div>
                    <p className="text-gray-400 text-sm">Season</p>
                    <p>{props.race.year}</p>
                </div>

            </div>
        </div>
    )
}

export default RaceOveriew