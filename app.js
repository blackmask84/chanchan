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
    res.sendFile(__dirname + '/public/seeu_pc.html');
});
app.get('/tieuchuanvanhanh', function (req, res) {
    res.sendFile(__dirname + '/public/2_tieuchuan.html');
});
app.get('/cauhoithuonggap', function (req, res) {
    res.sendFile(__dirname + '/public/3_faq.html');
});
app.get('/cauchuyencuahongvan', function (req, res) {
    res.sendFile(__dirname + '/public/4_cauchuyencuahongvan.html');
});
app.get('/hieuthemvechanchan', function (req, res) {
    res.sendFile(__dirname + '/public/5_blog.html');
});
app.get('/dangkythanhvienmoi', function (req, res) {
    res.sendFile(__dirname + '/public/6_register.html');
});
app.get('/thanhtoanquamomo', function (req, res) {
    res.sendFile(__dirname + '/public/8_momopay.html');
});
app.get('/timhieuvephichuongtrinh', function (req, res) {
    res.sendFile(__dirname + '/public/9_feeguide.html');
});
app.get('/timhieuchuongtrinh', function (req, res) {
    res.sendFile(__dirname + '/public/7_program1011.html');
});
app.get('/chancode', function (req, res) {
    res.sendFile(__dirname + '/public/10_programcreat.html');
});
app.get('/mqhtv', function (req, res) {
    res.sendFile(__dirname + '/public/why2111.html');
});

// get form

app.get('/creat-popup', function (req, res) {
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