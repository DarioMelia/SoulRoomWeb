const express = require("express") 
const {storeGet} = require("./storeHandler.js") 

const router = express.Router()

router.get("/", storeGet)

module.exports =  router