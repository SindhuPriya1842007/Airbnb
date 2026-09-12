import ServiceCard from "../components/ServiceCard"

function Services() {
  const navigate = useNavigate()

  return (
    <main className="px-8 py-10">
      <h1 className="text-3xl font-bold">
        Explore Services
      </h1>

      <p className="mt-2 text-gray-600">
        Book services that make your trip better.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

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
    </main>
  )
}

export default Services