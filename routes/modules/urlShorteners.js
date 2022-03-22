const express = require("express")
const router = express.Router()

const UrlShortener = require("../../models/urlShortener")
const generate = require("../../generate")


let collection = []

router.post("/", (req, res) => {
  const address = req.body.address
  if (collection.includes(address)) {
    return UrlShortener.findOne({ address })
      .lean()
      .then(urlShort => res.render("short", { urlShort }))
      .catch(error => console.log(error))
  } else {
    collection.push(address)
    const shortURL = generate()
    return UrlShortener.create({ address, shortURL })
      .then(() => res.render("short", { address, shortURL }))
      .catch(error => console.log(error))
  }
})



module.exports = router