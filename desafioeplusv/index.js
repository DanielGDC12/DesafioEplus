const express = require('express')
const app = express()
const port = 3001
const products = require('./products.json')

app.listen(port,()=>{
    console.log(`Estou rodando na porta ${port}`)
})

app.get('/', (req,res) => {
    res.send(products)
})