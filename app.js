const express = require('express')
const Coordinates = require('./routes/query')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
app.use(Coordinates)

app.listen(process.env.PORT || 3000, () => {
    
})