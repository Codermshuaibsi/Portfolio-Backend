import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    year: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["Completed", "In Progress"],
      default: "Completed",
    },
    description: {
      type: String,
      required: true,
    },
    technologiesUsed: [
      {
        type: String,
        required: true,
      },
    ],
    keyHighlights: [
      {
        type: String,
      },
    ],
    links: {
      demo: {
        type: String,
      },
      code: {
        type: String,
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);

