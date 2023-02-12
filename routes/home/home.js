const express = require("express") 
const {homeGet} = require("./homeHandler.js") 

const router = express.Router()

router.get("/", homeGet)

module.exports =  router