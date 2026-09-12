// import { BrowserRouter, Routes, Route } from "react-router-dom"
// import Home from "../pages/Home"

// function AppRoutes() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default AppRoutes



import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Home from "../pages/Home"
import Homes from "../pages/Homes"
import Experiences from "../pages/Experiences"
import Services from "../pages/Services"
import PropertyDetails from "../pages/PropertyDetails"
import ExperienceDetails from "../pages/ExperienceDetails"
import ServiceDetails from "../pages/ServiceDetails"
import SearchResults from "../pages/SearchResults"
import Login from "../pages/auth/Login"

function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homes" element={<Homes />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/services" element={<Services />} />
        <Route path="/homes/:id" element={<PropertyDetails />} />
        <Route path="/experiences/:id" element={<ExperienceDetails />} />
        <Route path="/services/:id" element={<ServiceDetails />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default AppRoutes