import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    cover: {
      type: String,
    },
    razorpayId: {
      type: String,
    },
    razorpaySecret: {
      type: String,
    },
  },
  {
    timestamps: true, // auto creates the createdAt and updatedAt
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User