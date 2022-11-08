import mongoose from "mongoose";

const { Schema } = mongoose;

const GameSchema = new mongoose.Schema(
  {
    id_api: {
      type: String,
      unique: true,
      required: true,
    },
    home: {
      type: String,
      required: true,
    },
    away: {
      type: String,
      required: true,
    },
    home_goals: {
      type: Number,
      required: false,
    },
    away_goals: {
      type: Number,
      required: false,
    },
    date: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      required: false,
      default: 0,
    },
    group: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Game", GameSchema);
