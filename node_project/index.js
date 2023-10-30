// Set express as Node.js web application server framework.
var express= require('express');
var app=express(); //created express library variable

// set the view engine to ejs. ejs is a javascript template library
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file
//create .ejs file for pages
// index page
app.get('/', function(req, res) {
var mascots = [
    { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
    { name: 'Tux', organization: "Linux", birth_year: 1996},
    { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
  ];
  var tagline = "No programming concept is complete without a cute animal mascot.";
  res.render('pages/index', {mascots, tagline});
});

// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});

app.listen(8080);
console.log('Server is listening on port 8080');

//This code defines an array called mascots and a string called tagline. 

