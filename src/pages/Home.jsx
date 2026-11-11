import {Link} from "react-router-dom"

function Home(){
    return (


        <div className="bg-[#151515] text-white min-h-screen p-8">

            <div className="mb-8">
                <h1 className="text-4xl font-bold mb-3">
                Welcome to F1
                <span className="text-red-600"> Fanatic</span>

                </h1>

                <p className="text-gray-400 text-lg">Follow the season & make your predictions!!</p>

                <div className="mb-10">

                    <img className="w-full rounded-xl object-cover" src= "https://www.pitdebrief.com/wp-content/uploads/Ferrari.png" />

                </div>

        </div>

        <h2 className="text-2xl font-bold mb-6">Explore the Season</h2>

        <div className="grid grid-cols-2 gap-6">
            <Link to = "/calendar">
                <div className="bg-[#252525] border border-gray-700 rounded-xl p-6 hover:border-red-600 transition">
                    <h3 className="text-xl font-bold mb-3">Race Calendar</h3>
                        <p className="text-gray-400">Explore upcoming races and grand prix results</p>

                </div>
            
            </Link>
            <Link to = "/drivers">
                <div className="bg-[#252525] border border-gray-700 rounded-xl p-6 hover:border-red-600 transition">
                    <h3 className="text-xl font-bold mb-3">Driver's Grid</h3>
                        <p className="text-gray-400">Learn more about the drivers on the grid </p>

                </div>
            
            </Link>

            <Link to = "/championship">
                <div className="bg-[#252525] border border-gray-700 rounded-xl p-6 hover:border-red-600 transition">
                    <h3 className="text-xl font-bold mb-3">Championship Standing</h3>
                        <p className="text-gray-400">Check out the live championship standing</p>

                </div>
            
            </Link>

            <Link to = "/predictions">
                <div className="bg-[#252525] border border-gray-700 rounded-xl p-6 hover:border-red-600 transition">
                    <h3 className="text-xl font-bold mb-3">Predictions</h3>
                        <p className="text-gray-400">Make your predictions and see if you're a true F1 fanatic!</p>

                </div>
            
            </Link>
        </div>
        </div>
    )
}

export default Home