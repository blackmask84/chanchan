var express = require('express');
var app = express();
var cors = require('cors');
var axios = require('axios');

var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json());
app.use(cors());

//setting middleware
app.use(express.static(__dirname + '/public')); //Serves resources from public folder

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});
app.get('/desk', function (req, res) {
    res.sendFile(__dirname + '/public/desk.html');
});
app.get('/tieuchuanvanhanh', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});
app.get('/cauhoithuonggap', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});
app.get('/cauchuyencuahongvan', function (req, res) {
    res.sendFile(__dirname + '/public/4_cauchuyencuahongvan.html');
});
app.get('/hieuthemvechanchan', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});
app.get('/dangkythanhvienmoi', function (req, res) {
    res.sendFile(__dirname + '/public/register2911.html');
});
app.get('/thanhtoanonline', function (req, res) {
    res.sendFile(__dirname + '/public/payonline0112.html');
});
app.get('/thanhtoanquamomo', function (req, res) {
    res.sendFile(__dirname + '/public/payonline0112.html');
});
app.get('/timhieuvephichuongtrinh', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});
app.get('/timhieuchuongtrinh', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});
app.get('/chancode', function (req, res) {
    res.sendFile(__dirname + '/public/creatprogram512.html');
});
app.get('/moiquanhetuyetvoi', function (req, res) {
    res.sendFile(__dirname + '/public/why2111.html');
});
app.get('/mqhtv', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});
app.get('/lienhe', function (req, res) {
    res.sendFile(__dirname + '/public/connect0112.html');
});
app.get('/test', function (req, res) {
    res.sendFile(__dirname + '/public/test.html');
});

// get form

app.get('/trial', function (req, res) {
    res.sendFile(__dirname + `/public/form/${req.originalUrl}.html`);
});

app.get('/believe', function (req, res) {
    res.sendFile(__dirname + `/public/form/${req.originalUrl}.html`);
});

// load facebook
app.get('/facebook1', function (req, res) {
    res.sendFile(__dirname + `/public/form/${req.originalUrl}.html`);
});

// handle register form
app.post('/register', function (req, res) {
    const data = req.body;
    axios.post('http://localhost:1337/registers', data)
    .then(function (data) {
        res.status(200).send('Register success');
    }).catch(function (err) {
        console.log(err);
        res.status(400).send('Register failed')
    })
});

var server = app.listen(8888, function(){
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});