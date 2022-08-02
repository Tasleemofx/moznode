const express= require('express');
const ApiRouter = require('./Routes/Api.js')

const app = express();
const PORT = 3000
app.use(express.json())
app.use("/api", ApiRouter)

app.get('/',(req,res)=>{
    res.send('<h1>Hello World</h1>')
})

// app.post('/api',(req,res)=>{
//     console.log(req.body)
//     res.send(req.body.name)
// })
app.listen(PORT, ()=>{
    console.log(`app now running on port ${PORT}`)
})