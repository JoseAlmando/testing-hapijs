"use strict";

const Hapi = require("@hapi/hapi");
const laabr = require("laabr");
require("dotenv").config();

require("./database/database");
const indexRoutes = require("./routes/index.routes");
const bookRoutes = require("./routes/book.routes");
const config = require("./config/config");
//const { options } = require("mongoose");

const init = async () => {
  const server = Hapi.server({
    port: config.PORT,
    host: config.HOST,
    routes: {
      cors: true,
    },
  });

  server.route(indexRoutes.index);
  server.route(bookRoutes.getBooks);
  server.route(bookRoutes.postBook);
  server.route(bookRoutes.putBook);
  
  await server.register({
    plugin: laabr, 
  });

  await server.start();
  console.log("Server is running on", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
