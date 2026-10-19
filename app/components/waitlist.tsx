"use client";

import { useActionState } from "react";
import { waitList, type waitlistType } from "../action";

const initialState: waitlistType = {
  status: "idle",
  message: "",
};
export default function WaitList() {
  const [state, formAction, pending] = useActionState(waitList, initialState);
  return (
    <section
      className="min-h-screen bg-gradient-to-br from-green-50 to-green-100
         flex items-center justify-center px-6 py-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl md:text-7xl font-bold">KrushiConnect</h1>
        <h2 className="text-xl md:text-2xl text-green-800 mt-2">
          Direct from farm to restaurant
        </h2>
        <p className="text-base md:text-lg max-w-2xl mt-8">
          Sell your crops directly to restaurants. No middleman.
        </p>
        <p className="text-base md:text-lg max-w-2xl ">
          ଚାଷୀଙ୍କ ସହ ସିଧାସଳଖ ଯୋଡ଼ି ହୁଅନ୍ତୁ ।
        </p>
        <p className=" text-xs uppercase tracking-wide bg-green-100 text-green-800 rounded-full px-3 py-1 mt-5 inline-block">
          Launching soon in Bhubaneswar
        </p>
        <form
          action={formAction}
          className="mt-5 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
        >
          <input
            className="flex-1 rounded-lg border border-green-300 bg-white
               px-4 py-3 outline-none
               focus:ring-2 focus:ring-green-600"
            type="email"
            placeholder="your@email.com"
            aria-label="Email address"
            name="email"
          />

          <button
            type="submit"
            className="rounded-lg bg-green-700 px-6 py-3
               font-semibold text-white
               hover:bg-green-800 transition"
            disabled={pending}
          >
            {pending ? "Joining..." : "Join waitlist"}
          </button>
        </form>
        {state.status === "success" ? (
          <p className="text-green-500">{state.message}</p>
        ) : state.status === "error" ? (
          <p className="text-red-500">{state.message}</p>
        ) : (
          <p>{state.message}</p>
        )}
      </div>
    </section>
  );
}
