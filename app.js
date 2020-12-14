const express = require('express')
const Coordinates = require('./routes/query')
const cors = require('cors')

const connectDB = require('./DB/connection');
connectDB();

const app = express()
app.use(cors())
app.use(express.json())
app.use(Coordinates)

let port = 8080

app.listen(process.env.PORT || port, () => {
    console.log(`App running at ${port}`)
})