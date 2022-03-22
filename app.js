const express = require("express")
const exphbs = require("express-handlebars")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const UrlShortener = require("./models/urlShortener")
const generate = require("./generate.js")



const app = express()
const port = 3000

mongoose.connect("mongodb://localhost/URL-Shortener")

const db = mongoose.connection

db.on("error", () => {
  console.log("mongodb error!")
})

db.once("open", () => {
  console.log("mongodb connected!")
})

app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

app.use(bodyParser.urlencoded({ extended: true }) )




app.get("/", (req, res) => {
  res.render("index")
})

let collection = []

app.post("/", (req, res) => {
  const address = req.body.address
  if(collection.includes(address)) {
    return UrlShortener.findOne({address})
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

app.listen(port, () => {
  console.log(`App is running on : http://localhost:${port}`)
})
