var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3000;


app.set('views', path.join(__dirname, 'views'));
//set the view engine that will render HTML from the server to the client
app.engine('.html', require('ejs').renderFile);
//Allow for these directories to be usable on the client side
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/bower_components'));
//we want to render html files
app.set('view engine', 'html');
app.set('view options', {
	layout: false
});

//middleware that allows for us to parse JSON and UTF-8 from the body of an HTTP request
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//load in our route(s)
var bugRoutes = require('./routes/bugRoutes');

//on homepage load, render the index page
app.get('/', function(req, res) {
	res.render('index');
});

app.use('/api/bugs', bugRoutes);

//If the path can not be found on any other route, return 404
app.use(function(req, res, next){
  res.status(404);
  // respond with html page
  if (req.accepts('html')) {
    return res.render('404', { url: req.url });
  }
  // respond with json
  if (req.accepts('json')) {
    return res.send({ error: 'Not found' });
  }
  // default to plain-text. send()
  res.type('txt').send('Not found');
});

var server = app.listen(port, function() {
	var host = server.address().address;
	console.log('Example app listening at http://localhost:' + port);
});
