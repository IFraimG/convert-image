let express = require("express")
let bodyParser = require('body-parser')
let app = express()
let path = require("path")

let multer = require("multer")
let upload = multer({ dest: "src/uploads/" })
let sharp = require('sharp');

app.use(express.static(path.resolve(__dirname, "src")))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post("/edit-image", upload.single("image"), (req, res) => {
  let name = "output" + req.body.format
  sharp("src/uploads/" + req.file.filename)
    .toFile("src/formats/" + name)
    .then(() => res.send("formats/" + name))
    .catch(err => console.log(err))
})

app.listen(1111, () => console.log("сервер запущен !!!"))