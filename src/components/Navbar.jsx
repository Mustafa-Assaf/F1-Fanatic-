
import { NavLink } from 'react-router-dom'

function Navbar() {
  const linkStyle = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-200 pb-2 border-b-2 ${
      isActive ? 'text-red-500 border-red-500' : 'text-gray-300 border-transparent hover:text-white hover:border-red-500'
    }`

  return (
    <nav className="bg-[#111111] text-white px-10 py-5 flex items-center justify-between border-b border-gray-800">

      {/* Branding */}
      <div className="flex items-center gap-3">
        <span className="text-3xl">🏁</span>
        <h1 className="text-2xl font-bold tracking-wider">
          F1 <span className="text-red-500">FANATIC</span>
        </h1>
      </div>

      {/* Navigation links */}
      <div className="flex items-center gap-8">
        <NavLink to="/" className={linkStyle}>
          Home
        </NavLink>

        <NavLink to="/calendar" className={linkStyle}>
          Calendar
        </NavLink>

        <NavLink to="/drivers" className={linkStyle}>
          Drivers
        </NavLink>

        <NavLink to="/championship" className={linkStyle}>
          Championship
        </NavLink>

        <NavLink to="/predictions" className={linkStyle}>
          Predictions
        </NavLink>
      </div>

    </nav>
  )
}

export default Navbar
