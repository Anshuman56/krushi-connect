import { waitList } from "./action";

export default async function Home() {
  return (
    <section
      className="min-h-screen bg-gradient-to-br from-green-50 to-green-100
         flex items-center justify-center px-6 py-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-green-900">
          KrushiConnect
        </h1>
        <h2 className="mt-6 text-xl text-green-800">
          Direct from farm to restaurant
        </h2>
        <p className=" text-6xl font-extrabold text-green-800 leading-relaxed">
          Launching soon in <br />
          Bhubaneswar
        </p>
        <form
          action={waitList}
          className="mt-5 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
        >
          <input
            className="flex-1 rounded-lg border border-green-300 bg-white
               px-4 py-3 outline-none
               focus:ring-2 focus:ring-green-600"
            type="text"
            name="email"
          />

          <button
            type="submit"
            className="rounded-lg bg-green-700 px-6 py-3
               font-semibold text-white
               hover:bg-green-800 transition"
          >
            Submit
          </button>
        </form>
        <footer className="mt-6 leading-relaxed text-green-800">
          Built by Anshuman
        </footer>
      </div>
    </section>
  );
}
