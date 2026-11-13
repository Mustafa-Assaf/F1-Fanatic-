import { useState, useEffect } from "react"
import api from "../services/api"

function Championship() {
    const [results, setResults] = useState([])
    const [drivers, setDrivers] = useState([])

    useEffect(() => {
        const getChampionshipData = async () => {
            const resultsResponse = await api.get("/results")
            setResults(resultsResponse.data)

            const driversResponse = await api.get("/drivers")
            setDrivers(driversResponse.data)
        }

        getChampionshipData()
    }, [])

    // Calculate Driver Championship points
    const driverStandings = []

    drivers.forEach(driver => {
        const existingDriver = driverStandings.find(
            standing => standing.driver_number === driver.driver_number
        )

        if (!existingDriver) {
            const driverResults = results.filter(
                result => result.driver_number === driver.driver_number
            )

            const totalPoints = driverResults.reduce(
                (total, result) => total + (result.points || 0),
                0
            )

            driverStandings.push({
                driver_number: driver.driver_number,
                full_name: driver.full_name,
                team_name: driver.team_name,
                headshot_url: driver.headshot_url,
                points: totalPoints
            })
        }
    })

    // Sort drivers by total points
    driverStandings.sort((a, b) => b.points - a.points)

    return (
        <div className="bg-[#151515] text-white min-h-screen p-8">

            <h1 className="text-3xl font-bold mb-8">
                Driver Championship
            </h1>

            <div className="bg-[#252525] rounded-xl border border-gray-700 overflow-hidden">

                <table className="w-full text-left">

                    <thead className="bg-[#303030]">
                        <tr>
                            <th className="p-4">Position</th>
                            <th className="p-4">Driver</th>
                            <th className="p-4">Team</th>
                            <th className="p-4 text-right">Points</th>
                        </tr>
                    </thead>

                    <tbody>
                        {driverStandings.map((driver, index) => (
                            <tr
                                key={driver.driver_number}
                                className="border-t border-gray-700"
                            >
                                <td className="p-4 font-bold">
                                    {index + 1}
                                </td>

                                <td className="p-4">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={driver.headshot_url}
                                            alt={driver.full_name}
                                            className="w-10 h-10 rounded-full object-cover"
                                        />
                                        {driver.full_name}
                                    </div>
                                </td>

                                <td className="p-4">
                                    {driver.team_name}
                                </td>

                                <td className="p-4 text-right font-bold">
                                    {driver.points}
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default Championship