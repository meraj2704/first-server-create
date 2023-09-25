const express = require('express')
const phones = require('./phone.json')
var cors = require('cors')
const app = express()
const port = 5000


app.use(cors())
app.get('/', (req,res)=>{
    res.send('Hello World')
})

app.get('/phones',(req,res)=>{
    res.send(phones)
})
app.get('/data', (req,res)=>{
    res.send('Hi i am meraaa    j  cndghfd')
})

app.get('/phones/:id' ,(req,res)=>{
    const id = parseInt(req.params.id);
    console.log(id);
    const phone = phones.find(phone=>phone.id ===id )
    res.send(phone)
})
app.listen(port, ()=>{
    console.log(`post is : ${port}`)
})