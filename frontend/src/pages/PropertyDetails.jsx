import { useNavigate } from "react-router-dom"

function PropertyDetails() {
  const navigate = useNavigate()

  return (
    <main className="mx-auto max-w-7xl px-8 py-10">

      {/* TITLE */}
      <h1 className="text-3xl font-bold">
        Cozy Beach House
      </h1>

      {/* LOCATION + RATING */}
      <p className="mt-2 text-gray-600">
        Goa, India · ⭐ 4.8 · 24 reviews
      </p>

      {/* PHOTO GALLERY */}
      <div className="mt-8 grid gap-3 md:grid-cols-2">

        <img
          src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4"
          alt="Cozy Beach House"
          className="h-96 w-full rounded-2xl object-cover"
        />

        <div className="grid grid-cols-2 gap-3">

          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
            alt="Property interior"
            className="h-full w-full rounded-2xl object-cover"
          />

          <img
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d"
            alt="Property room"
            className="h-full w-full rounded-2xl object-cover"
          />

        </div>

      </div>

      {/* ABOUT THE PLACE */}
      <div className="mt-10 max-w-3xl">

        <h2 className="text-2xl font-bold">
          About this place
        </h2>

        <p className="mt-4 leading-7 text-gray-600">
          Relax in this beautiful beach house with a peaceful atmosphere,
          comfortable rooms and easy access to the beach. Perfect for
          families, couples and small groups looking for a relaxing getaway.
        </p>

        {/* PROPERTY DETAILS */}
        <div className="mt-8 grid grid-cols-2 gap-6 border-y py-6 md:grid-cols-4">

          <div>
            <p className="text-sm text-gray-500">
              Guests
            </p>
            <p className="mt-1 font-semibold">
              4 guests
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Bedrooms
            </p>
            <p className="mt-1 font-semibold">
              2 bedrooms
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Beds
            </p>
            <p className="mt-1 font-semibold">
              2 beds
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Bathrooms
            </p>
            <p className="mt-1 font-semibold">
              2 bathrooms
            </p>
          </div>

        </div>

      </div>

      {/* AMENITIES */}
      <section className="mt-10">

        <h2 className="text-2xl font-bold">
          What this place offers
        </h2>

        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">

          <div className="rounded-xl border p-4">
            📶 Wi-Fi
          </div>

          <div className="rounded-xl border p-4">
            🏊 Swimming pool
          </div>

          <div className="rounded-xl border p-4">
            ❄️ Air conditioning
          </div>

          <div className="rounded-xl border p-4">
            🍳 Kitchen
          </div>

          <div className="rounded-xl border p-4">
            🚗 Free parking
          </div>

          <div className="rounded-xl border p-4">
            📺 TV
          </div>

        </div>

      </section>

      {/* HOST */}
      <section className="mt-12 border-t pt-10">

        <h2 className="text-2xl font-bold">
          Meet your host
        </h2>

        <div className="mt-6 flex items-center gap-4">

          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-200 text-2xl">
            👤
          </div>

          <div>
            <h3 className="font-semibold">
              Rahul
            </h3>

            <p className="text-sm text-gray-500">
              Hosting since 2022 · ⭐ 4.9 rating
            </p>
          </div>

        </div>

        <p className="mt-5 max-w-2xl text-gray-600">
          Your host is available to help you have a comfortable and
          memorable stay.
        </p>

      </section>

      {/* RESERVATION BOX */}
      <section className="mt-12 max-w-md rounded-2xl border p-6 shadow-md">

        <div className="flex items-center justify-between">
          <p className="text-xl font-semibold">
            ₹4,500 <span className="text-sm font-normal text-gray-500">night</span>
          </p>

          <p className="text-sm">
            ⭐ 4.8
          </p>
        </div>

        <div className="mt-6 grid grid-cols-2 rounded-xl border">

          <div className="border-r p-4">
            <p className="text-xs font-semibold">
              CHECK-IN
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Add date
            </p>
          </div>

          <div className="p-4">
            <p className="text-xs font-semibold">
              CHECK-OUT
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Add date
            </p>
          </div>

        </div>

        <div className="mt-4 rounded-xl border p-4">
          <p className="text-xs font-semibold">
            GUESTS
          </p>
          <p className="mt-1 text-sm text-gray-500">
            1 guest
          </p>
        </div>

        {/* <button className="mt-6 w-full rounded-xl bg-black py-3 font-semibold text-white hover:bg-gray-800">
          Reserve
        </button> */}
        <button
          onClick={() => navigate("/login")}
          className="mt-6 w-full rounded-xl bg-black py-3 font-semibold text-white hover:bg-gray-800"
        >
          Reserve
        </button>

        <p className="mt-3 text-center text-sm text-gray-500">
          You won't be charged yet
        </p>

      </section>

    </main>
  )
}

export default PropertyDetails