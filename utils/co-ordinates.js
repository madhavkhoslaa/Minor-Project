const bounds = (coordinates) => {
    var min_x = coordinates[0][0]
    var min_y = coordinates[0][1]
    var max_x = coordinates[0][0]
    var max_y = coordinates[0][1]
    var bounds = []
    coordinates.forEach((data) => {
        if(min_x>data[0]){
            min_x = data[0]
        }
        if(max_x<data[0]){
            max_x = data[0]
        }
        if(min_y>data[1]){
            min_y = data[1]
        }
        if(max_y<data[1])
            max_x = data[1]
    })
    bounds = [
            [fetch(coordinates, min_x, 0)],
            [fetch(coordinates, max_x, 0)],
            [fetch(coordinates, min_y, 1)],
            [fetch(coordinates, max_y, 1)]
            ]
    return bounds
}

const fetch = (coordinates, xy, latlong) => {
    //latlong indicates searches for search for lat or long
    //latlong 1 = search for long
    //latlong = 0 search for lat
    var pair = []
    coordinates.forEach(data => {
        if(data[latlong]==xy){
            pair = data
        }
    })
    return pair
}

var coordinates = [
    [
      -72.283119,
      42.92402
    ],
    [
      -72.2836071,
      42.923694
    ],
    [
      -72.2834837,
      42.9232108
    ],
    [
      -72.2826844,
      42.9231833
    ],
    [
      -72.2824216,
      42.9236704
    ]
  ]

console.log(bounds(coordinates))