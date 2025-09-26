const express = require('express')
const app = express()
app.use(express.json())


app.use((err, req, res, next)=>{
    console.log(err.stack)
    res.status(500).send('Something went wrong')
})

app.listen(3000, (err)=>{
    if(err){
        console.log('server starting the server')
        return
    }console.log("server is running on port 3000")
})