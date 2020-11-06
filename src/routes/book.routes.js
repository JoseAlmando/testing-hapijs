"use strict";

const Book = require("../models/Bookmodel");

const postBook = {
  method: "POST",
  path: "/book",
  handler: (request, h) => {
    return "POST  HapiJs";
  },
};

const putBook = {
  method: "PUT",
  path: "/book",
  handler: (request, h) => {
    return "PUT  HapiJs";
  },
};

const getBooks = {
  method: "GET",
  path: "/book",
  handler: async (request, h) => {
    return {  data: await Book.find({ deletedAt: null }) } ;
  },
};

module.exports = { getBooks, postBook, putBook };
