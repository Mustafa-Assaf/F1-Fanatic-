import {useEffect, useState} from 'react'
import api from '../services/api.js'
import RaceCard from '../components/Racecard.jsx'

function Calendar () {
    const [calendar,setCalendar] =useState([])

    useEffect (() => {
        // const getMeetings = async () => {
        //     try {
        //         const response = await api.get("/meetings")
        //         setCalendar(response.data[0])
        //     } catch (error) {
        //         console.log(error);
        //     }
        // }

        // getMeetings()
        api.get('/meetings')
        .then (response => {
            console.log(response.data)
            setCalendar(response.data)
        })
        .catch (error => {
            console.log(error)
        })
    }, [])
    console.log(calendar)
    return (
        <div className="bg-black min-h-screen p-6">
            <h1>Race Calendar</h1>

         <div className="grid grid-cols-3 gap-5">
            {calendar.length ? calendar.map(meeting => (
                <RaceCard key={meeting.id} meeting={meeting} />
            )) : <span>loading</span>}
      </div>
        </div>
    
    )
}

export default Calendar