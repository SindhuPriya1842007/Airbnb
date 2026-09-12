// import { Link } from "react-router-dom"

// function Navbar() {
//   return (
//     <nav className="w-full border-b">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

//         {/* Logo */}
//         <Link to="/" className="text-2xl font-bold">
//           StayScape
//         </Link>

//         {/* Navigation */}
//         <div className="flex gap-6">
//           <Link to="/homes">Homes</Link>
//           <Link to="/experiences">Experiences</Link>
//           <Link to="/services">Services</Link>
//         </div>

//         {/* Login */}
//         <div className="flex items-center gap-4">
//           <button>Become a Host</button>

//           <button className="border rounded-full px-4 py-2">
//             Login
//           </button>
//         </div>

//       </div>
//     </nav>
//   )
// }

// export default Navbar


import { Link, useLocation } from "react-router-dom"

function Navbar() {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="w-full bg-white">
      {/* <div className="flex h-20 items-center justify-between px-6"> */}
      <div className="relative flex h-20 items-center px-6">

        {/* LEFT NAVIGATION */}
        {/* <div className="flex items-center gap-8"> */}
        <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-8">

          <Link
            to="/"
            className={`flex h-20 flex-col items-center justify-center px-2 ${
              isActive("/")
                ? "border-b-2 border-black text-black"
                : "text-gray-500"
            }`}
          >
            <span className="text-3xl">🌍</span>
            <span className="text-sm font-semibold">All</span>
          </Link>

          <Link
            to="/homes"
            className={`flex h-20 flex-col items-center justify-center px-2 ${
              isActive("/homes")
                ? "border-b-2 border-black text-black"
                : "text-gray-500"
            }`}
          >
            <span className="text-3xl">🏠</span>
            <span className="text-sm font-semibold">Homes</span>
          </Link>

          <Link
            to="/experiences"
            className={`flex h-20 flex-col items-center justify-center px-2 ${
              isActive("/experiences")
                ? "border-b-2 border-black text-black"
                : "text-gray-500"
            }`}
          >
            <span className="text-3xl">🎈</span>
            <span className="text-sm font-semibold">Experiences</span>
          </Link>

          <Link
            to="/services"
            className={`flex h-20 flex-col items-center justify-center px-2 ${
              isActive("/services")
                ? "border-b-2 border-black text-black"
                : "text-gray-500"
            }`}
          >
            <span className="text-3xl">🛎️</span>
            <span className="text-sm font-semibold">Services</span>
          </Link>

        </div>


        {/* RIGHT SIDE */}
        {/* <div className="flex items-center gap-4"> */}
        <div className="ml-auto mr-2 flex items-center gap-4">
          
          <Link
            to="/host"
            className="rounded-full px-5 py-3 text-sm font-semibold hover:bg-gray-100"
          >
            Become a host
          </Link>

          {/* PROFILE */}
          <Link
            to="/login"
            className="flex h-12 w-12 items-center justify-center rounded-full border bg-gray-50 text-2xl hover:shadow-md"
          >
            👤
          </Link>

          {/* MENU */}
          <button
            className="flex h-12 w-12 items-center justify-center rounded-full border bg-gray-50 text-xl hover:shadow-md"
          >
            ☰
          </button>

        </div>

      </div>
    </nav>
  )
}

export default Navbar