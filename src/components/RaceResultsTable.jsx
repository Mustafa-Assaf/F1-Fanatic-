function RaceResultsTable (props) {

    const pointsSystem = [25,18,15,12,10,8,6,4,2,1]
    return (
        <div className="bg-[#151515] text-white rounded-xl p-6 border border-gray-700 w-[70%]">
            <h2 className="text-2xl font-bold mb-4">Race Results</h2>
            <table className="w-full text-left">
                <thead>
                    <tr className="text-gray-400 border-b border-gray-700">
                        <th className="p-3">Pos</th>
                        <th className="p-3">Driver</th>
                        <th className="p-3">Team</th>
                        <th className="p-3">Time / Gap</th>
                        <th className="p-3">Points</th>
                    </tr>

                </thead>

                <tbody>
                    {[...props.results]
                        .filter (result => result.position !=null)
                        .sort ((a,b) => a.position - b.position)
                        .slice (0,10)
                        .map(result => {
                        const driver = props.drivers.find(
                            driver=>driver.driver_number === result.driver_number
                            )
                        const points = pointsSystem[result.position-1] || "-"
                        return(
                        <tr key={result.driver_number}
                        className="border-b border-gray-800 hover:bg-[#252525]"
                        >
                            <td className="p-3">{result.position}</td>
                            <td className="p-3">
                                <div className="flex items-center gap-3">
                                <img 
                                src={driver.headshot_url}
                                className="w-10 h-10 rounded-full object-cover"
                                />
                               {driver.full_name} </div>
                            </td>

                            <td className="p-3">{driver.team_name}</td>
                            <td className="p-3">{result.position===1 ? '-' : result.gap_to_leader}</td>
                            <td className="p-3">{points}</td>

                        </tr>
                        )

                    })}
                </tbody>

            </table>

        </div>
    )
}

export default RaceResultsTable