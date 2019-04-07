var express = require("express");
var querystring = require('querystring');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static("./public"));

app.listen(3000, () => {
 console.log("Server running on port 3000");
});


var app_id = "3529c511";
var app_key = "25af165f14270714d02cd98ebfd43c1c";
var from = 0;
var to = 5;


var rp = require('request-promise');

app.get('/service', function(request, response) {
    var ingredients = request.query.ingredients;
    var options = {
        uri: "https://api.edamam.com/search?q="+ingredients+"&app_id="+app_id+
"&app_key="+app_key+"&from="+from+"&to="+to,
        
        json: true // Automatically parses the JSON string in the response
};
    
    rp(options)
    .then(function (repos) {
        console.log(repos);
        response.send(repos);
    })
    .catch(function (err) {
        // API call failed...
    });
});