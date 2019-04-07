var express = require("express");
var app = express();
app.use(express.static("./public"));
app.listen(3000, () => {
 console.log("Server running on port 3000");
});

/*
app.get('https://api.edamam.com/search?q=onion,carrot&app_id=3529c511&app_key=25af165f14270714d02cd98ebfd43c1c&from=0&to=3', function(request, response) {
  response.send();
});
*/

app.get('/service', function(request, response) {
  //console.dir('working');
    var Request = require("request");

Request.get("https://api.edamam.com/search?q=onion,carrot&app_id=3529c511&app_key=25af165f14270714d02cd98ebfd43c1c&from=0&to=3", (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    console.dir(JSON.parse(body));
});
});

/*Working
var Request = require("request");

Request.get("https://api.edamam.com/search?q=onion,carrot&app_id=3529c511&app_key=25af165f14270714d02cd98ebfd43c1c&from=0&to=3", (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    console.dir(JSON.parse(body));
});
*/
