import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Calendar from './pages/Calendar'
import RaceDetails from './pages/RaceDetails'
import Drivers from './pages/Drivers'
import DriversDetails from './pages/DriversDetails'
import Championship from './pages/Championship'
import Predictions from './pages/Predictions'

import Navbar from './components/Navbar'

function App() {
  return (

    <>
    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/calendar/:raceId" element={<RaceDetails />} />
      <Route path="/drivers" element={<Drivers />} />
      <Route path="/drivers/:driverId" element={<DriversDetails />} />
      <Route path="/championship" element={<Championship />} />
      <Route path="/predictions" element={<Predictions />} />
    </Routes>

    </>
  );
}

export default App;