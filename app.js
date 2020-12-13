const express = require('express')
const Coordinates = require('./routes/query')

const app = express()
app.use(express.json())
app.use(Coordinates)

app.listen(8080, () => {
    
})