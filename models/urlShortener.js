const mongoose = require("mongoose")
const Schema = mongoose.Schema

const urlShortenerSchema = new Schema({
  address: {
    type: String,
    required: true
  },
  shortURL: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model("UrlShortener", urlShortenerSchema)