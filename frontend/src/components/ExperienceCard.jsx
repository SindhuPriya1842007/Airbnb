function ExperienceCard({ title, location, price, rating }) {
  return (
    <div className="cursor-pointer overflow-hidden rounded-xl border hover:shadow-md">
      {/* <div className="flex h-52 items-center justify-center bg-gray-200">
        <span className="text-gray-500">Experience Image</span>
      </div> */}

      <div className="h-52 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac"
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="p-4">
        <h3 className="font-semibold">{title}</h3>

        <p className="mt-1 text-sm text-gray-500">
          {location}
        </p>

        <p className="mt-2 text-sm">
          ⭐ {rating}
        </p>

        <p className="mt-2 font-semibold">
          ₹{price} per person
        </p>
      </div>
    </div>
  )
}

export default ExperienceCard