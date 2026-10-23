export type Listing = {
  farmerName: string;
  cropName: string;
  cropQuantity: number;
  cropPrice: number;
  location: string;
  mobNumber: string;
};

export type waitlistType = {
  status: "idle" | "error" | "success";
  message: string;
};
