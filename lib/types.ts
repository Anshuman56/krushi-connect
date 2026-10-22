export type Listing = {
  farmerName: string;
  crop: string;
  quantity: number;
  pricePerKg: number;
  location: string;
  whatsAppNumber: string;
  createdAt: string;
};

export type waitlistType = {
  status: "idle" | "error" | "success";
  message: string;
};
