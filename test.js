const a = require("./utils/co-ordinates")
const b = require("./utils/generation")

const coo = [
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

var x =a.bounds(coo)
var y = []
x.forEach(element => y.push(element[0]))
console.log(y)
var mesh = b.generate(y, 5)
console.log("mesh", mesh)