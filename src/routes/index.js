const express = require("express");
const router = express.Router()
const {urlShortner,url}=require('../contollers/urlShortner.controller')





router.post("/api/urlshortner",urlShortner)

router.get("/:hash",url)




module.exports = router

