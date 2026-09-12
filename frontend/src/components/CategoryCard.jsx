function CategoryCard({ name }) {
  return (
    <div className="cursor-pointer rounded-2xl border p-6 text-center transition hover:-translate-y-1 hover:shadow-md">
      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
        🏠
      </div>

      <h3 className="font-semibold">{name}</h3>
    </div>
  )
}

export default CategoryCard