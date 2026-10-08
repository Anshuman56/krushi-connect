import mongoose from "mongoose";

const WaitListSchema = new mongoose.Schema({
  email: { type: String, require: true },
  createAt: { type: Date, default: Date.now },
});

export default mongoose.models.WaitList ||
  mongoose.model("WaitList", WaitListSchema);
