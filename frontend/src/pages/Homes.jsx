import SearchBar from "../components/SearchBar"
import PropertyCard from "../components/PropertyCard"
import CategoryCard from "../components/CategoryCard"

function Homes() {
  return (
    <main className="px-8 py-10">

      <h1 className="text-3xl font-bold">
        Explore Homes
      </h1>

      <p className="mt-2 text-gray-600">
        Find a place that feels like home.
      </p>

      {/* SEARCH */}
      <div className="mt-8">
        <SearchBar />
      </div>

      {/* PROPERTY CARDS */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">


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

      {/* CATEGORIES */}
      <section className="mt-12">

        <h2 className="mb-6 text-2xl font-bold">
          Browse by category
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

    </main>
  )
}

export default Homes