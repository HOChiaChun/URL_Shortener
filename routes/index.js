const express = require("express")
const router = express.Router()

const home = require("./modules/home")
const urlShorteners = require("./modules/urlShorteners")

router.use("/", home)
router.use("/", urlShorteners)


module.exports = router