"use strict";

const mongoose = require("mongoose");
const config = require("../config/config");

mongoose.set("useFindAndModify", true);
mongoose
  .connect(config.DB.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((db) => {
    console.log(
      `DB: ${db.connections[0].name} is connected in host: ${db.connections[0].host}`
    );
  })
  .catch((err) => console.log(err));
