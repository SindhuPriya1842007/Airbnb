import ExperienceCard from "../components/ExperienceCard"

function Experiences() {
  return (
    <main className="px-8 py-10">
      <h1 className="text-3xl font-bold">
        Explore Experiences
      </h1>

      <p className="mt-2 text-gray-600">
        Discover unforgettable things to do.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

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
    </main>
  )
}

export default Experiences