
const express=require('express')
const cors=require('cors')
const routes=require('./src/routes')




const app = express()
require('./src/config/database')
require('dotenv').config()

app.use(cors())
app.use(express.json())


app.use(routes)
// 404 route
app.get('/',async()=>{
    res.send("hello world")
})
app.get('*', function (req, res) {
    res.status(400).json({status: 400,message: 'No Route Found.'})
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});