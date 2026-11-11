import { useState, useEffect } from "react"
import api from "../services/api"

function PredictionForm(props) {

    const [prediction, setPrediction] = useState({
        first: "",
        second: "",
        third: "",
        fourth: "",
        fifth: ""
    })

    const [submitted, setSubmitted] =useState(false)

    const handleSubmit = async() => {
        const newPrediction = {
            meeting_key: Number(props.raceId),
            predicted_positions: [
                Number(prediction.first),
                Number(prediction.second),
                Number(prediction.third),
                Number(prediction.fourth),
                Number(prediction.fifth)
            ],
            submitted: true
            
        }
        await api.post("/predictions", newPrediction)
        setSubmitted(true)
    }

    useEffect(() => {
        const getPrediction = async () => {
            const response = await api.get("/predictions")
            const existingPrediction = response.data.find(
                prediction => prediction.meeting_key === Number(props.raceId)
            )

            if (existingPrediction) {setSubmitted(true)}
        }
        getPrediction()
    }, [props.raceId])

    return (

        <>

        {submitted ? (
            <div className="bg-[#151515] text-white rounded-xl p-6 border border-gray-700 w-[27%]">
                <h2 className="text-2xl font-bold mb-2">Prediction Completed!</h2>
                <p className="text-gray-400">Navigate to the Predictions Page to modify your prediction</p>
            </div>
        ):(
        <div className="bg-[#151515] text-white rounded-xl p-6 border border-gray-700 w-[27%]">

            <h2 className="text-2xl font-bold mb-2">
                Make Your Prediction
            </h2>

            <p className="text-gray-400 mb-6">
                Who will finish in the top 5?
            </p>

            {/* First Place */}
            <div className="mb-4">
                <label className="block mb-2">1st Place</label>

                <select
                    className="w-full bg-[#252525] text-white border border-gray-700 rounded-lg p-3"
                    value={prediction.first}
                    onChange={event => setPrediction({
                        ...prediction,
                        first: event.target.value
                    })}
                >
                    <option value="">Select a driver</option>

                    {props.drivers.map(driver => (
                        <option key={driver.driver_number} value={driver.driver_number}>
                            {driver.full_name}
                        </option>
                    ))}
                </select>
            </div>

            {/* Second Place */}
            <div className="mb-4">
                <label className="block mb-2">2nd Place</label>

                <select
                    className="w-full bg-[#252525] text-white border border-gray-700 rounded-lg p-3"
                    value={prediction.second}
                    onChange={event => setPrediction({
                        ...prediction,
                        second: event.target.value
                    })}
                >
                    <option value="">Select a driver</option>

                    {props.drivers.map(driver => (
                        <option key={driver.driver_number} value={driver.driver_number}>
                            {driver.full_name}
                        </option>
                    ))}
                </select>
            </div>

            {/* Third Place */}
            <div className="mb-4">
                <label className="block mb-2">3rd Place</label>

                <select
                    className="w-full bg-[#252525] text-white border border-gray-700 rounded-lg p-3"
                    value={prediction.third}
                    onChange={event => setPrediction({
                        ...prediction,
                        third: event.target.value
                    })}
                >
                    <option value="">Select a driver</option>

                    {props.drivers.map(driver => (
                        <option key={driver.driver_number} value={driver.driver_number}>
                            {driver.full_name}
                        </option>
                    ))}
                </select>
            </div>

            {/* Fourth Place */}
            <div className="mb-4">
                <label className="block mb-2">4th Place</label>

                <select
                    className="w-full bg-[#252525] text-white border border-gray-700 rounded-lg p-3"
                    value={prediction.fourth}
                    onChange={event => setPrediction({
                        ...prediction,
                        fourth: event.target.value
                    })}
                >
                    <option value="">Select a driver</option>

                    {props.drivers.map(driver => (
                        <option key={driver.driver_number} value={driver.driver_number}>
                            {driver.full_name}
                        </option>
                    ))}
                </select>
            </div>

            {/* Fifth Place */}
            <div className="mb-4">
                <label className="block mb-2">5th Place</label>

                <select
                    className="w-full bg-[#252525] text-white border border-gray-700 rounded-lg p-3"
                    value={prediction.fifth}
                    onChange={event => setPrediction({
                        ...prediction,
                        fifth: event.target.value
                    })}
                >
                    <option value="">Select a driver</option>

                    {props.drivers.map(driver => (
                        <option key={driver.driver_number} value={driver.driver_number}>
                            {driver.full_name}
                        </option>
                    ))}
                </select>
            </div>

            <button
                onClick={handleSubmit}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg mt-4"
            >
                Submit Prediction
            </button>

        </div>
        )}
        </>
    )
}

export default PredictionForm