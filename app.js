const express = require("express") 
const { PORT } = require("./utils/config.js") 
const lg = require("./utils/logger.js") 
const homeRoutes = require("./routes/home/home.js") 

const app = express()
    .set("view engine", "ejs")
    .use(express.urlencoded({ extended: true }))
    .use(express.static("public"))
    .use(express.static(__dirname))


app.use("/",homeRoutes)
try {

    app.listen(PORT, err => {
        if (!err) {
            process.env.NODE_ENV === "test"
                ? console.log(`Test server running on port ${PORT}`)
                : lg.info(`Server running on port: ${PORT}`)
        }
    })
} catch (err) {
    lg.err(err)
}

