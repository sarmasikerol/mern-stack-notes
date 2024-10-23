const mongoose = require("mongoose");

const notSema = mongoose.Schema(
  {
    baslik: {
      type: String,
      required: true,
    },
    aciklama: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Not", notSema);
