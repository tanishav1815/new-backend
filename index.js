const express = require('express');
const app = express();

const router = require('./routes/task')

const cors = require('cors')
app.use(cors())

const port = process.env.PORT||8080
app.get('/',(req,res)=>{
    res.send("welcome home")
})

app.use('/api',router)

app.listen(port,()=>{
    console.log("running....")
});