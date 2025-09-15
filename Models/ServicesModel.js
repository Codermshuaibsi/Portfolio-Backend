const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    icon: {
      type: String, // store icon name like "Code", "Brush", "Database" OR a URL
      required: true,
    },
    features: {
      type: [String], // array of strings
      default: [],
    },
    price: {
      type: String, // example: "$99" or "Starts from ₹4999"
      required: true,
    },
  },
  { timestamps: true }
);


module.exports = mongoose.model("Services", serviceSchema);