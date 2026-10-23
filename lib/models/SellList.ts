import mongoose from "mongoose";

const WaitListSchema = new mongoose.Schema({
  farmerName: { type: String, require: true },
  cropName: { type: String, require: true },
  cropQuantity: { type: Number, require: true },
  cropPrice: { type: Number, require: true },
  location: { type: String, require: true },
  mobNumber: { type: String, require: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.SellList ||
  mongoose.model("SellList", WaitListSchema);
