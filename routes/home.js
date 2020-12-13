const express = require('express')

const home = express.Router()

home.get('/', (req, res)=>{
    res.send("kaam karra")
})

home.post('/', (req, res)=>{
    res.send("kaam karra")
})

module.exports = home