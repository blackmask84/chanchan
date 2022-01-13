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
    res.sendFile(__dirname + '/public/index.html');
});
app.get('/tieuchuanvanhanh', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});
app.get('/cauhoithuonggap', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});
app.get('/cauchuyencuahongvan', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});
app.get('/hieuthemvechanchan', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});
app.get('/dangkythanhvienmoi', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});
app.get('/thanhtoanonline', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});
app.get('/thanhtoanquamomo', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});
app.get('/timhieuvephichuongtrinh', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});
app.get('/timhieuchuongtrinh', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});
app.get('/chancode', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});
app.get('/moiquanhetuyetvoi', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});
app.get('/mqhtv', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});
app.get('/lienhe', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});
app.get('/test', function (req, res) {
    res.sendFile(__dirname + '/public/test.html');
});
app.get('/terms', function (req, res) {
    res.sendFile(__dirname + '/public/terms.html');
});
app.get('/terms_desk', function (req, res) {
    res.sendFile(__dirname + '/public/terms_desk.html');
});
app.get('/policy', function (req, res) {
    res.sendFile(__dirname + '/public/policy.html');
});
app.get('/paid', function (req, res) {
    res.sendFile(__dirname + '/public/paid.html');
});
app.get('/verifymember2nd', function (req, res) {
    res.sendFile(__dirname + '/public/paid.html');
});
app.get('/conceptintro', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});
app.get('/time', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});
app.get('/trial', function (req, res) {
    res.sendFile(__dirname + '/public/trial.html');
});
app.get('/trialm', function (req, res) {
    res.sendFile(__dirname + '/public/trial.html');
});
app.get('/boots', function (req, res) {
    res.sendFile(__dirname + '/public/trial.html');
});
app.get('/remember', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});
app.get('/concept', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});
app.get('/connect_guide', function (req, res) {
    res.sendFile(__dirname + '/public/connect_guide.html');
});
app.get('/open_letter', function (req, res) {
    res.sendFile(__dirname + '/public/open_letter.html');
});
app.get('/open_letter%', function (req, res) {
    res.sendFile(__dirname + '/public/open_letter.html');
});

// get form
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