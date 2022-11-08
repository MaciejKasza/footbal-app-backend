import mongoose from "mongoose";

const { Schema } = mongoose;

const ResultSchema = new mongoose.Schema(
  {
    userID: {
      type: String,
      required: true,
    },
    gameID: {
      type: String,
      required: true,
    },
    home: {
      type: Number,
      required: true,
    },
    away: {
      type: Number,
      required: true,
    },
    points: {
      type: Number,
      required: true,
    },
    result: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Result", ResultSchema);
