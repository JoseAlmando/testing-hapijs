const { Schema, model } = require("mongoose");


const bookSchema = new Schema({
    ISBN: { type: String, unique: true },
    title: { type: String, required: true },
    author: String,
    editorial: String,
    createdAt: { type: Date, default: Date.now() },
    updatedAt: Date,
    deletedAt:  { type: Date, default: "" },
  })

module.exports = model('Book',bookSchema)