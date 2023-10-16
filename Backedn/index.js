// var express= require('express');
// var app=express(); 

// app.set('view engine', 'ejs');

// app.get('/', function(req, res) {
//     res.render('pages/index');
// });

// app.get('/about', function(req, res) {
//   res.render('pages/about');
// });

// app.listen(8080);

// console.log('Server is listening on port 8080');
var express =  require('express');
var app = express();
app.set('view engine','ejs');
app.get('/',(req,res)=>{
  res.render('pages/index');
})
app.listen(8000)