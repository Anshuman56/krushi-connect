"use client";
import { useActionState } from "react";
import { createList } from "./actions";

const initialState = { status: "idle", message: "" };
export default function ListingForm() {
  const [state, formAction, pending] = useActionState(createList, initialState);
  return (
    <form action={formAction}>
      <label>
        Farmer Name: <input type="text" name="farmerName" required />
      </label>
    </form>
  );
}
