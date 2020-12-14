const express = require('express')
const cood = require("../utils/co-ordinates")
const generation = require("../utils/generation")
const Geolocation = require("../DB/geolocation");

const query = express.Router()

query.post(('/pointsdedo/'), async (req, res) => {
    const bounds = cood.bounds(req.body.cood)
    var bounds_ = []
    bounds.forEach((latlong) => {
        bounds_.push(latlong[0])
    })
    const distance = req.body.distance;
    const mesh = generation.generate(bounds_, req.body.distance)
    // console.log(mesh);
    // saving to database
    let data = {}
    data.cood = mesh;
    data.distance = distance;
    let locationModel = new Geolocation(data);
    await locationModel.save();
    res.send(locationModel);
})

query.get(('/pointslelo'), async (req, res) => {
    Geolocation.findOne({}, {}, 
        {sort: {'_id' : -1}}, 
        (err, location) => {
            res.send(location);
        }
    )
});

module.exports = query;
