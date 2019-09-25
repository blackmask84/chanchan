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
app.get('/urlname', function (req, res) {
    res.sendFile(__dirname + '/public/index2.html');
});

// Tra ve form 1
app.get('/form1-popup', function (req, res) {
    res.sendFile(__dirname + `/public/form/${req.originalUrl}.html`);
});

app.get('/form2-popup', function (req, res) {
    res.sendFile(__dirname + `/public/form/${req.originalUrl}.html`);
});

app.get('/form3-popup', function (req, res) {
    res.sendFile(__dirname + `/public/form/${req.originalUrl}.html`);
});

app.get('/form4-popup', function (req, res) {
    res.sendFile(__dirname + `/public/form/${req.originalUrl}.html`);
});


// load facebook
app.get('/facebook1', function (req, res) {
    res.sendFile(__dirname + `/public/form/${req.originalUrl}.html`);
});
app.get('/facebook2', function (req, res) {
    res.sendFile(__dirname + `/public/form/${req.originalUrl}.html`);
});
app.get('/facebook3', function (req, res) {
    res.sendFile(__dirname + `/public/form/${req.originalUrl}.html`);
});
app.get('/facebook4', function (req, res) {
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