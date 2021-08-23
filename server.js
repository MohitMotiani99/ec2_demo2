var express = require('express')
var app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.listen(3300,()=>{
    console.log('EC2 Demo Server Started')
})
app.post('/showEmp',(req,res)=>{
    var data = req.body
    res.send(data)
})