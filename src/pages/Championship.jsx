import {useState, useEffect} from "react"
import api from "../services/api"

function Championship (){
    const [results, setResults] = useState([])
    const [drivers, setDrivers] = useState ([])

useEffect(() => {
    const getChampionshipData = async() => {
        const resultsResponse = await api.get ("/results")
            setResults (resultsResponse.data)

        const driversResponse = await api.get("/drivers")
            setDrivers(drivers.response.data)
    }

    getChampionshipData()
},[])


return (
    <div className="bg-[#151515] text-white min-h-screen p-8">
        <h1 className="text-3xl font-bold mb-8">
        Championship Standing
        </h1>

        <h2 className="text-2xl font-bold mb-4">
            Driver Championship
        </h2>

        <h2 className="text-2xl font-bold mb-4">Constructor Championship</h2>

    </div>
)
}

export default Championship