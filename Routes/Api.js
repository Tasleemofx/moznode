const express= require('express');

const router = express.Router()
const newItems = []

router.get('/', (req,res)=>{
    res.send('<h2>API areas only</h2>')
})

router.post('/',(req,res)=>{
    newItems.push(req.body)
    console.log(newItems)
    res.send("New Item added to array")
})

module.exports = router