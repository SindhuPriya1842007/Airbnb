import { useEffect, useState } from "react"

function Carousel() {
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
      title: "Beautiful Beach Stay",
      location: "Goa, India",
    },
    {
      image:
        "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
      title: "Mountain Escape",
      location: "Manali, India",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
      title: "Luxury Villa",
      location: "Kerala, India",
    },
  ]

  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }

  const previousSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative w-full">
      <div className="relative h-[450px] overflow-hidden rounded-3xl shadow-lg">
        <img
          src={slides[current].image}
          alt={slides[current].title}
          className="h-full w-full object-cover transition-opacity duration-500"
        />

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-8 pt-20 text-white">
          <h2 className="text-2xl font-bold">
            {slides[current].title}
          </h2>

          <p className="mt-1">
            {slides[current].location}
          </p>
        </div>
      </div>

      <button
        onClick={previousSlide}
        className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-xl shadow-md hover:scale-105"
      >
        ←
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-xl shadow-md hover:scale-105"
      >
        →
      </button>

      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 w-2 rounded-full ${
              current === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel