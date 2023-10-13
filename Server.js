const express = require('express')
let app = express()


app.get('/Test',(req,res)=>{
    console.log()
    return res.status(200).json({message:`ping at ${new Date()}`})
})

app.listen(8050,()=>{
    console.log(`server is running on ${8050}`)
})