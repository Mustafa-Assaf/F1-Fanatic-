import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import api from '../services/api.js'
import RaceHeader from '../components/RaceHeader.jsx'
import RaceOverview from '../components/RaceOverview.jsx'
import CircuitInfo from '../components/CircuitInfo.jsx'
import RaceResultsTable from '../components/RaceResultsTable.jsx'
import PredictionForm from '../components/PredictionForm.jsx'

function RaceDetails () {

    const {raceId} = useParams()
    const [race, setRace] = useState(null)
    const [results, setResults] =useState([])
    const [drivers, setDrivers] =useState([])
 
    useEffect (() => {
        api.get(`/meetings/${raceId}`)
        .then(response => {
            setRace(response.data)
            console.log(response.data);
        })
        .catch (error => console.log(error))

        api.get('/results')
        .then (response => {
            const raceResults = response.data.filter(
                result => result.meeting_key === Number(raceId)
            )
            setResults(raceResults)
            console.log(raceResults)
        })

        .catch(error => console.log (error))

        api.get('/drivers')
        .then (response => (
            setDrivers(response.data)
        )
        .catch (error => console.log (error))
        )
        
    }, [raceId])


    return (
        <>
            <div>
                {race ? <RaceHeader race={race} /> : <p className="text-white">Loading</p>}
            </div>

            <div className="flex gap-6 w-full">
                {race ? <RaceOverview race={race} /> : <p className="text-white">Loading</p>}
                {race ? <CircuitInfo race={race} /> : <p className="text-white">Loading....</p>}
            </div>

            <div className="flex gap-6 w-full mt-6">
                {race ? <RaceResultsTable results={results} drivers={drivers} /> : <p className="text-white">Loading</p>}
                {race ? <PredictionForm drivers={drivers} raceId={raceId}/> : <p className="text-white">Loading</p>}
            </div>
        </>
    )
}

export default RaceDetails