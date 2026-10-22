"use server";

import Waitlist from "@/lib/models/Waitlist";
import { dbConnect } from "@/lib/mongodb";

import { type waitlistType } from "@/lib/types";

export async function waitList(
  prevState: waitlistType,
  formData: FormData,
): Promise<waitlistType> {
  try {
    await dbConnect();
  } catch (err) {
    if (err instanceof Error) return { status: "error", message: err.message };
  }
  const email = formData.get("email") as string;

  if (typeof email !== "string" || email.trim() === "") {
    return {
      status: "error",
      message: "You can't submit an empty email.",
    };
  }

  if (!email.includes("@")) {
    return {
      status: "error",
      message: "It's not a valid email.",
    };
  }

  await Waitlist.create({ email });
  return {
    status: "success",
    message: "Thanks! We'll be in touch.",
  };
}
