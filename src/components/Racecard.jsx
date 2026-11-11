import {Link } from 'react-router-dom'

function RaceCard (props) {



    return (
    <div className ="bg-[#151515] text-white rounded-xl p-5 border border-gray-700 cursor-crosshair hover:border-red-500 duration-200" >
    <Link to={`/calendar/${props.meeting.id}`}>
        <h2>{props.meeting.meeting_name}</h2>
        <p>{props.meeting.circuit_short_name}</p>
        <img className="w-12 h-8 object-contain rounded" src={props.meeting.country_flag}/>
        <img className="w-full h-32 object-contain" src= {props.meeting.circuit_image} />
        <p>
            {new Date(props.meeting.date_start).toLocaleDateString()}
            {' - '}
            {new Date(props.meeting.date_end).toLocaleDateString()}
        </p>
        </Link>
    </div>
    )
}

export default RaceCard