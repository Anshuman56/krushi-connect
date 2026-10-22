"use server";
import { type waitlistType } from "@/lib/types";
export async function createList(
  prevState: waitlistType,
  formData: FormData,
): Promise<waitlistType> {
  return { status: "idle", message: "" };
}
