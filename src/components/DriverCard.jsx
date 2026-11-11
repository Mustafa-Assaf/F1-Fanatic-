function DriverCard (props) {

    return (
        <div className="bg-[#252525] rounded-xl p-5 border border-gray-700 hover:border-red-600 hover:scale-105 transition duration-300 cursor-pointer">
            <img src={props.driver.headshot_url}
            className="w-full h-48 object-contain mb-4" />

            <h2 className="text-xl font-bold text-white">{props.driver.full_name}</h2>
            <p className="text-red-500 font-bold mt-2">#{props.driver.driver_number}</p>
        </div>
    )
}

export default DriverCard