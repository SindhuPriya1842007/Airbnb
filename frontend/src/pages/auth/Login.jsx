function Login() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="w-full max-w-md rounded-2xl border p-8 shadow-sm">
        <h1 className="text-2xl font-bold">
          Log in to StayScape
        </h1>

        <div className="mt-6 space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg border px-4 py-3"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-lg border px-4 py-3"
          />

          <button className="w-full rounded-lg bg-black py-3 text-white">
            Login
          </button>
        </div>
      </div>
    </main>
  )
}

export default Login