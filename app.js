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
app.get('/trialm%', function (req, res) {
    res.sendFile(__dirname + '/public/tangtoc.html');
});
app.get('/trial%', function (req, res) {
    res.sendFile(__dirname + '/public/tangtoc.html');
});
app.get('/openletter%', function (req, res) {
    res.sendFile(__dirname + '/public/tangtoc.html');
});
app.get('/matchguide%', function (req, res) {
    res.sendFile(__dirname + '/public/match_guide.html');
});
app.get('/remguide%', function (req, res) {
    res.sendFile(__dirname + '/public/rematch_guide.html');
});
app.get('/newsignpolicy%', function (req, res) {
    res.sendFile(__dirname + '/public/newsign_policy.html');
});
app.get('/paidset%', function (req, res) {
    res.sendFile(__dirname + '/public/paidset.html');
});
app.get('/paidgui%', function (req, res) {
    res.sendFile(__dirname + '/public/paidgui.html');
});
app.get('/tangtoccamp', function (req, res) {
    res.sendFile(__dirname + '/public/tangtoc.html');
});
app.get('/tangtoc%', function (req, res) {
    res.sendFile(__dirname + '/public/tangtoc.html');
});
app.get('/tangtoc', function (req, res) {
    res.sendFile(__dirname + '/public/tangtoc.html');
});
app.get('/tangtocdk', function (req, res) {
    res.sendFile(__dirname + '/public/tangtocdk.html');
});
app.get('/hengiaumat', function (req, res) {
    res.sendFile(__dirname + '/public/tangtoc.html');
});
app.get('/hengiaumat%', function (req, res) {
    res.sendFile(__dirname + '/public/tangtoc.html');
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