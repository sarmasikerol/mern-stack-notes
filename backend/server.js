const express = require("express");
require("dotenv").config();
const notRoute = require("./routes/notlar.js");
const mongoose = require("mongoose");

const app = express();

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Veritabanı Bağlandı");

    app.listen(process.env.PORT, () => {
      console.log(`${process.env.PORT} port dinleniyorrrr`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/notlar", notRoute);
