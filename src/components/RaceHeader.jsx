function RaceHeader(props){
    return (
        <div className="bg-[#151515] text-white rounded-xl p-8 border border-gray-700">
            <h1 className="text-4xl font-bold">{props.race.meeting_name}</h1>

        </div>
    )
}

export default RaceHeader