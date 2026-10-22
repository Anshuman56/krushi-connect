"use server";
import SellList from "@/lib/models/SellList";
import { dbConnect } from "@/lib/mongodb";
import { type waitlistType } from "@/lib/types";

export async function createList(
  prevState: waitlistType,
  formData: FormData,
): Promise<waitlistType> {
  try {
    dbConnect();
  } catch (err) {
    if (err instanceof Error) return { status: "error", message: err.message };
  }
  const farmerName = formData.get("farmerName");
  const cropName = formData.get("cropName");
  const cropQuantity = formData.get("cropQuantity");
  const cropPrice = formData.get("cropPrice");
  const location = formData.get("location");
  const mobNumber = formData.get("mobNumber");
  if (typeof farmerName !== "string" || farmerName.trim() === "") {
    return {
      status: "error",
      message: "You can't submit an empty name",
    };
  }
  if (typeof mobNumber !== "string" || mobNumber.trim() === "") {
    return {
      status: "error",
      message: "You can't submit an empty mobile number",
    };
  }
  if (typeof cropQuantity !== "number" || cropQuantity === 0) {
    return {
      status: "error",
      message: "You can't submit an zero in crop quantity",
    };
  }

  if (mobNumber.length !== 10) {
    return {
      status: "error",
      message: "It's not a valid mobile.",
    };
  }
  await SellList.create({
    farmerName,
    cropName,
    cropQuantity,
    cropPrice,
    location,
    mobNumber,
  });
  return {
    status: "success",
    message: "Your listing is live! / ଆପଣଙ୍କ ଫସଲ ତାଲିକାଭୁକ୍ତ ହେଲା!",
  };
}
