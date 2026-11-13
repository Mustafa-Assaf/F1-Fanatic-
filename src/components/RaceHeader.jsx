function RaceHeader(props){
    return (
        <div className="bg-[#151515] text-white rounded-xl p-8 border border-gray-700 flex items-center gap-330">

            <h1 className="text-4xl font-bold">{props.race.meeting_name}</h1>

            <img
                src={props.race.country_flag}
                alt={props.race.country_name}
                className="w-16 h-10 object-cover rounded"
            />

        </div>
    )
}

export default RaceHeader