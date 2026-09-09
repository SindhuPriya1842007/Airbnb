function Navbar() {
  return (
    <nav className="w-full border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-bold">
          StayScape
        </div>

        {/* Navigation */}
        <div className="flex gap-6">
          <a href="#">Homes</a>
          <a href="#">Experiences</a>
          <a href="#">Services</a>
        </div>

        {/* Login */}
        <div className="flex items-center gap-4">
          <button>Become a Host</button>
          <button className="border rounded-full px-4 py-2">
            Login
          </button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar