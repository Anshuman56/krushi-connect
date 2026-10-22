"use client";
import { useActionState } from "react";
import { createList } from "./actions";
import { type waitlistType } from "@/lib/types";

const initialState: waitlistType = { status: "idle", message: "" };
export default function ListingForm() {
  const [state, formAction, pending] = useActionState(createList, initialState);
  return (
    <form action={formAction} className="space-y-4">
      <label className="text-sm font-medium text-gray-700">
        Farmer Name:{" "}
        <input
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg"
          type="text"
          name="farmerName"
          required
        />
      </label>
      <label className="text-sm font-medium text-gray-700">
        Crop Name:{" "}
        <input
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg"
          type="text"
          name="cropName"
          required
        />
      </label>
      <label className="text-sm font-medium text-gray-700">
        Crop Quantity:{" "}
        <input
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg"
          type="number"
          name="cropQuantity"
          required
        />
      </label>
      <label className="text-sm font-medium text-gray-700">
        Crop Price:{" "}
        <input
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg"
          type="number"
          name="cropPrice"
          required
        />
      </label>
      <label className="text-sm font-medium text-gray-700">
        Location:{" "}
        <input
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg"
          type="text"
          name="location"
          required
        />
      </label>
      <label className="text-sm font-medium text-gray-700">
        WhatsApp number:{" "}
        <input
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg"
          type="number"
          name="mobNumber"
          required
        />
      </label>
      <button
        type="submit"
        className="py-3 text-lg font-semibold rounded-lg cursor-pointer"
      >
        {pending ? "Posting..." : "Post Listing"}
      </button>
      {state.status === "success" ? (
        <p className="text-green-500">{state.message}</p>
      ) : state.status === "error" ? (
        <p className="text-red-500">{state.message}</p>
      ) : (
        <p>{state.message}</p>
      )}
    </form>
  );
}
