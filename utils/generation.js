const meter = 1/111000

const generate = (bounds, distance) => {
//1 latlong = 111000 ms
    distance *= meter
    var latlongs = []
    var y = bounds[2][1]
    var x = bounds[0][0]
    var y_limit =  bounds[3][1]
    var x_limit = bounds[2][0]
    for(var long = y; long<y_limit; long+=distance){
        for(var lat = x; lat<x_limit; lat+=distance){
            latlongs.push([lat, long])
        }
    }
    return latlongs
}

const filter_mesh = (bounds, mesh) => {

}


module.exports = {generate, filter_mesh}

  