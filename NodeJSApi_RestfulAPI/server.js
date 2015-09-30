var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3000;
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', require('ejs').renderFile);
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/bower_components'));
app.set('view engine', 'html');
app.set('view options', {
    layout: false
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var bugRoutes = require('./routes/bugRoutes');
app.get('/', function (req, res) {
    res.render('index');
});
app.use('/api/bugs', bugRoutes);
app.use(function (req, res, next) {
    res.status(404);
    if (req.accepts('html')) {
        return res.render('404', { url: req.url });
    }
    if (req.accepts('json')) {
        return res.send({ error: 'Not found' });
    }
    res.type('txt').send('Not found');
});
var server = app.listen(port, function () {
    var host = server.address().address;
    console.log('Example app listening at http://localhost:' + port);
});
