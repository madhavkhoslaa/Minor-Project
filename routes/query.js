const express = require('express')
const cood = require("../utils/co-ordinates")
const generation = require("../utils/generation")

const query = express.Router()

query.post(('/pointsdedo/'), (req, res) => {
    const bounds = cood.bounds(req.body.cood)
    var bounds_ = []
    bounds.forEach((latlong) => {
        bounds_.push(latlong[0])
    })
    const mesh = generation.generate(bounds_, req.body.distance)
    res.send(mesh)
})

module.exports = query
