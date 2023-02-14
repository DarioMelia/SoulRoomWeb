const express = require("express")

const { PORT } = require("./utils/config.js") //trato con env
const lg = require("./utils/logger.js") //mayor control sobre el logeo en consola
//routers de express
const homeRoutes = require("./routes/home/home.js")
const adminRoutes = require("./routes/admin/admin.js")
const storeRoutes = require("./routes/store/store.js")

// creamos la app y configuramos el middleware
const app = express()
    .set("view engine", "ejs")//motor de renderizado para ejs
    .use(express.urlencoded({ extended: true }))//middleware para formateo del contenido de las llamadas
    .use(express.static("public"))//sirve los archivos estáticos de la pagina, guardados en la carpeta "public"
    .use(express.static(__dirname))


app.use("/",homeRoutes)
app.use("/admin",adminRoutes)
app.use("/store",storeRoutes)

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

