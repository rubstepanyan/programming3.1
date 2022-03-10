var express = require("express");
var app = express();

app.use(express.static("game"));

app.get("/", function (req, res) {
   res.redirect("html.html");
});

app.listen(3000, function () {
   console.log("Example is running on port 3000");
});


var fs = require('fs');



var statistics = {};
let a = 45;
let b = 10;
let c = 20;
let e = 10;
let d = 10;
let k = 10;
let z = 11;
setInterval(function () {
   statistics.grass = a++;
   statistics.grassEater = b++;
   statistics.sunk = c++;
   statistics.pat = e++;
   statistics.averich = d++;
   statistics.amenaker = k++;
   statistics.Predator = z++;
   fs.writeFile("statistics.json", JSON.stringify(statistics), function () {
      console.log("statics")
      console.log(statistics)

   })

}, 6000)


