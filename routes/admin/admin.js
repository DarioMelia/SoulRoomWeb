const express = require("express") 
const {adminGet} = require("./adminHandler.js") 

const router = express.Router()

router.get("/", adminGet)

module.exports =  router