import {useState, useEffect} from "react"
import api from "../services/api"
import PredictionCard from "../components/PredictionCard.jsx"

function Predictions () {

const [predictions, setPredictions] = useState([])
const [meetings, setMeetings] = useState([])
const [drivers, setDrivers] = useState([])

useEffect (() => {
    const getPredictions = async () => {
        const response = await api.get("/predictions")
        setPredictions(response.data)

         const meetingsResponse = await api.get("/meetings")
         setMeetings (meetingsResponse.data)

         const driversResponse = await api.get("/drivers")
         setDrivers (driversResponse.data)
    }

    getPredictions()

},[])

return (
    <div className="bg-[#151515] text-white min-h-screen p-8">

        <h1 className="text-3xl font-bold mb-6">
            Predictions
        </h1>

        <div className="grid grid-cols-2 gap-6">

            {predictions.map(prediction => (
                <PredictionCard
                    key={prediction.id}
                    prediction={prediction}
                    meetings={meetings}
                    drivers={drivers}
                />
            ))}

        </div>

    </div>
)
}

export default Predictions