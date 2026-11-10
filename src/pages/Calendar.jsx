import {useEffect, useState} from 'react'
import api from '../services/api.js'

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
            setCalendar(response.data[0])
        })
        .catch (error => {
            console.log(error)
        })
    }, [])
    console.log(calendar)
    return (
        <div>
            <h1>Race Calendar</h1>

            {calendar.length ? calendar.map(meeting => (
                <div key={meeting.meeting_key}>
                <p >
                {meeting.meeting_name}
                </p>
                </div>
            )) : <span>loading</span>}
        </div>
    )
}

export default Calendar