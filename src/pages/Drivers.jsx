import {useState, useEffect} from "react"
import api from "../services/api"
import DriverCard from "../components/DriverCard"

function Drivers () {

     const [drivers, setDrivers] =useState([])

     useEffect (() => {
        const getDrivers = async () => {
            const response = await api.get("/drivers")
            setDrivers(response.data)
        }

        getDrivers()
     },[])

    return (
        <div className="bg-[#151515] text-white min-h-screen p-8 grid grid-cols-2 gap-6">
            <h1 className="text-3xl font-bold mb-6"> F1 Drivers</h1>

            {drivers.map(driver => (
                <DriverCard 
                key={driver.driver_number}
                driver={driver}
                />
            ))}
        </div>
    )
}

export default Drivers