// function SearchBar() {
//   return (
//     <div className="mx-auto mt-8 flex max-w-4xl items-center rounded-full border p-2 shadow-md">
      
//       <div className="flex-1 px-5">
//         <p className="text-sm font-semibold">Where</p>
//         <p className="text-sm text-gray-500">Search destinations</p>
//       </div>

//       <div className="flex-1 border-l px-5">
//         <p className="text-sm font-semibold">When</p>
//         <p className="text-sm text-gray-500">Add dates</p>
//       </div>

//       <div className="flex-1 border-l px-5">
//         <p className="text-sm font-semibold">Who</p>
//         <p className="text-sm text-gray-500">Add guests</p>
//       </div>

//       <button className="rounded-full bg-black px-6 py-3 text-white">
//         Search
//       </button>

//     </div>
//   )
// }

// export default SearchBar



import { useState } from "react"

function SearchBar() {
  // const [showWhere, setShowWhere] = useState(false)
  const [showWhere, setShowWhere] = useState(false)
  const [showWhen, setShowWhen] = useState(false)

  return (
    <div className="relative w-full max-w-2xl">

      <div className="flex items-center rounded-full border border-gray-300 bg-white p-2 shadow-md">

        <button
          onClick={() => setShowWhere(!showWhere)}
          className="flex-1 px-5 py-2 text-left"
        >
          <p className="text-sm font-semibold">Where</p>
          <p className="text-sm text-gray-500">
            Search destinations
          </p>
        </button>

        {/* <div className="border-l border-gray-300 px-5 py-2">
          <p className="text-sm font-semibold">When</p>
          <p className="text-sm text-gray-500">Add dates</p>
        </div> */}

        <button
          onClick={() => setShowWhen(!showWhen)}
          className="border-l border-gray-300 px-5 py-2 text-left"
        >
          <p className="text-sm font-semibold">When</p>
          <p className="text-sm text-gray-500">Add dates</p>
        </button>

        <div className="border-l border-gray-300 px-5 py-2">
          <p className="text-sm font-semibold">Who</p>
          <p className="text-sm text-gray-500">Add guests</p>
        </div>

        {/* <button className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black text-xl text-white">
          🔍
        </button> */}

        <button
          onClick={() => window.location.href = "/search"}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black text-xl text-white"
        >
          🔍
        </button>

      </div>

      {showWhere && (
        <div className="absolute left-0 top-20 z-20 w-80 rounded-2xl border bg-white p-5 shadow-xl">
          <p className="font-semibold">Where do you want to go?</p>

          <input
            type="text"
            placeholder="Search destinations"
            className="mt-4 w-full rounded-xl border px-4 py-3 outline-none focus:border-black"
          />

          <p className="mt-4 text-sm text-gray-500">
            Popular destinations
          </p>

          <div className="mt-3 space-y-2">
            <button className="block w-full rounded-lg p-2 text-left hover:bg-gray-100">
              Hyderabad
            </button>

            <button className="block w-full rounded-lg p-2 text-left hover:bg-gray-100">
              Goa
            </button>

            <button className="block w-full rounded-lg p-2 text-left hover:bg-gray-100">
              Manali
            </button>
          </div>
        </div>
      )}

      {showWhen && (
  <div className="absolute right-20 top-20 z-20 w-80 rounded-2xl border bg-white p-5 shadow-xl">
    <p className="font-semibold">Choose your dates</p>

    <div className="mt-4">
      <label className="text-sm font-medium">
        Check-in
      </label>

      <input
        type="date"
        className="mt-2 w-full rounded-xl border px-4 py-3"
      />
    </div>

    <div className="mt-4">
      <label className="text-sm font-medium">
        Check-out
      </label>

      <input
        type="date"
        className="mt-2 w-full rounded-xl border px-4 py-3"
      />
    </div>
  </div>
)}
    </div>
  )
}

export default SearchBar