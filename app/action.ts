"use server";

import Waitlist from "@/lib/models/Waitlist";
import { dbConnect } from "@/lib/mongodb";

export async function waitList(formData: FormData) {
  await dbConnect();
  const email = formData.get("email") as string;
  await Waitlist.create({ email });
}
