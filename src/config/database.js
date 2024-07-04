const mongoose = require('mongoose')
require('dotenv').config()



const url=process.env.DB_URL
const db = mongoose.connect(url).then(res=>{
    console.log(`connected to database`)
}).catch(err=>{
    console.log(err.message)
})


module.exports = db