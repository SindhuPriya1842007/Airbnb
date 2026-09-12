// import SearchBar from "../components/SearchBar"
// import CategoryCard from "../components/CategoryCard"
// import PropertyCard from "../components/PropertyCard"
// import ExperienceCard from "../components/ExperienceCard"
// import ServiceCard from "../components/ServiceCard"
// import Carousel from "../components/Carousel"

// function Home() {
//   return (
//     <main className="px-8 py-10">
//       <section className="text-center">
//         <h1 className="text-5xl font-bold">
//           Find your next stay
//         </h1>

//         <p className="mt-4 text-gray-600">
//           Discover unique places, experiences and services.
//         </p>
//         <SearchBar />
//         <Carousel />

//         <button className="mt-6 rounded-full bg-black px-6 py-3 text-white">
//           Explore stays
//         </button>
//       </section>
//       <section className="mt-16">
//         <h2 className="mb-6 text-2xl font-bold">
//             Explore categories
//         </h2>

//         <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-8">
//             <CategoryCard name="Beach" />
//             <CategoryCard name="Mountains" />
//             <CategoryCard name="Luxury" />
//             <CategoryCard name="Trending" />
//             <CategoryCard name="Countryside" />
//             <CategoryCard name="City" />
//             <CategoryCard name="Pools" />
//             <CategoryCard name="Adventure" />
//         </div>
//     </section>
//     <section className="mt-16">
//         <h2 className="mb-6 text-2xl font-bold">
//             Featured homes
//         </h2>

//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//             <PropertyCard
//             title="Cozy Beach House"
//             location="Goa, India"
//             price="4,500"
//             rating="4.8"
//             />

//             <PropertyCard
//             title="Mountain View Cabin"
//             location="Manali, India"
//             price="3,200"
//             rating="4.9"
//             />

//             <PropertyCard
//             title="Luxury City Apartment"
//             location="Hyderabad, India"
//             price="5,000"
//             rating="4.7"
//             />

//             <PropertyCard
//             title="Peaceful Countryside Stay"
//             location="Wayanad, India"
//             price="2,800"
//             rating="4.8"
//             />
//         </div>
//     </section>
//     <section className="mt-16">
//   <h2 className="mb-6 text-2xl font-bold">
//     Experiences
//   </h2>

//   <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//     <ExperienceCard
//       title="Hyderabad Food Walk"
//       location="Hyderabad, India"
//       price="1,200"
//       rating="4.9"
//     />

//     <ExperienceCard
//       title="Beach Photography"
//       location="Goa, India"
//       price="2,000"
//       rating="4.8"
//     />

//     <ExperienceCard
//       title="Mountain Adventure"
//       location="Manali, India"
//       price="1,800"
//       rating="4.9"
//     />

//     <ExperienceCard
//       title="Traditional Art Workshop"
//       location="Jaipur, India"
//       price="900"
//       rating="4.7"
//     />
//   </div>
// </section>
// <section className="mt-16">
//   <h2 className="mb-6 text-2xl font-bold">
//     Services
//   </h2>

//   <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//     <ServiceCard
//       title="Private Chef"
//       location="Goa, India"
//       price="3,000"
//       rating="4.9"
//     />

//     <ServiceCard
//       title="Professional Photography"
//       location="Hyderabad, India"
//       price="2,500"
//       rating="4.8"
//     />

//     <ServiceCard
//       title="Wellness Session"
//       location="Bangalore, India"
//       price="1,500"
//       rating="4.7"
//     />

//     <ServiceCard
//       title="Personal Fitness"
//       location="Mumbai, India"
//       price="1,200"
//       rating="4.8"
//     />
//   </div>
// </section>
//     </main>
//   )
// }

// export default Home


import SearchBar from "../components/SearchBar"
import Carousel from "../components/Carousel"
import CategoryCard from "../components/CategoryCard"
import PropertyCard from "../components/PropertyCard"
import ExperienceCard from "../components/ExperienceCard"
import ServiceCard from "../components/ServiceCard"
import { Link } from "react-router-dom"

function Home() {
  return (
    <main>

      {/* HERO SECTION */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-8 py-16 lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div>
          <h1 className="text-5xl font-bold leading-tight">
            Find your next stay
          </h1>

          <p className="mt-5 max-w-lg text-lg text-gray-600">
            Discover unique places, unforgettable experiences and
            amazing services for your next trip.
          </p>

          <div className="mt-8">
            <SearchBar />
          </div>

          <Link
            to="/homes"
            className="mt-6 inline-block rounded-full bg-black px-7 py-3 text-white hover:bg-gray-800"
          >
            Explore stays
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <Carousel />
        </div>

      </section>


      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-8 py-12">
        <h2 className="mb-6 text-2xl font-bold">
          Explore categories
        </h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-8">
          <CategoryCard name="Beach" />
          <CategoryCard name="Mountains" />
          <CategoryCard name="Luxury" />
          <CategoryCard name="Trending" />
          <CategoryCard name="Countryside" />
          <CategoryCard name="City" />
          <CategoryCard name="Pools" />
          <CategoryCard name="Adventure" />
        </div>
      </section>


      {/* FEATURED HOMES */}
      <section className="mx-auto max-w-7xl px-8 py-12">
        <h2 className="mb-6 text-2xl font-bold">
          Featured homes
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <PropertyCard
            title="Cozy Beach House"
            location="Goa, India"
            price="4,500"
            rating="4.8"
          />

          <PropertyCard
            title="Mountain View Cabin"
            location="Manali, India"
            price="3,200"
            rating="4.9"
          />

          <PropertyCard
            title="Luxury City Apartment"
            location="Hyderabad, India"
            price="5,000"
            rating="4.7"
          />

          <PropertyCard
            title="Peaceful Countryside Stay"
            location="Wayanad, India"
            price="2,800"
            rating="4.8"
          />
        </div>
      </section>


      {/* EXPERIENCES */}
      <section className="mx-auto max-w-7xl px-8 py-12">
        <h2 className="mb-6 text-2xl font-bold">
          Experiences
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <ExperienceCard
            title="Hyderabad Food Walk"
            location="Hyderabad, India"
            price="1,200"
            rating="4.9"
          />

          <ExperienceCard
            title="Beach Photography"
            location="Goa, India"
            price="2,000"
            rating="4.8"
          />

          <ExperienceCard
            title="Mountain Adventure"
            location="Manali, India"
            price="1,800"
            rating="4.9"
          />

          <ExperienceCard
            title="Traditional Art Workshop"
            location="Jaipur, India"
            price="900"
            rating="4.7"
          />
        </div>
      </section>


      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-8 py-12">
        <h2 className="mb-6 text-2xl font-bold">
          Services
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <ServiceCard
            title="Private Chef"
            location="Goa, India"
            price="3,000"
            rating="4.9"
          />

          <ServiceCard
            title="Professional Photography"
            location="Hyderabad, India"
            price="2,500"
            rating="4.8"
          />

          <ServiceCard
            title="Wellness Session"
            location="Bangalore, India"
            price="1,500"
            rating="4.7"
          />

          <ServiceCard
            title="Personal Fitness"
            location="Mumbai, India"
            price="1,200"
            rating="4.8"
          />
        </div>
      </section>

    </main>
  )
}

export default Home