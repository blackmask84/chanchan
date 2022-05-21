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
/*cũ trước ngày 19.05.22*/
app.get('/trialm%', function (req, res) {
    res.sendFile(__dirname + '/public/dangky.html');
});
app.get('/trial%', function (req, res) {
    res.sendFile(__dirname + '/public/dangky.html');
});
app.get('/openletter%', function (req, res) {
    res.sendFile(__dirname + '/public/dangky.html');
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
    res.sendFile(__dirname + '/public/dangky.html');
});
app.get('/paidgui%', function (req, res) {
    res.sendFile(__dirname + '/public/paidgui.html');
});
app.get('/tangtoccamp', function (req, res) {
    res.sendFile(__dirname + '/public/dangky.html');
});
app.get('/tangtoc%', function (req, res) {
    res.sendFile(__dirname + '/public/dangky.html');
});
app.get('/tangtoc', function (req, res) {
    res.sendFile(__dirname + '/public/dangky.html');
});
app.get('/tangtocdk', function (req, res) {
    res.sendFile(__dirname + '/public/dangky.html');
});

/* Đang chạy từ ngày 19.05.22 */
app.get('/hengiaumat', function (req, res) {
    res.sendFile(__dirname + '/public/hengiaumat.html');
});
app.get('/hengiaumat%', function (req, res) {
    res.sendFile(__dirname + '/public/hengiaumat.html');
});
app.get('/dangky', function (req, res) {
    res.sendFile(__dirname + '/public/dangky.html');
});
app.get('/dangky%', function (req, res) {
    res.sendFile(__dirname + '/public/dangky.html');
});

var server = app.listen(8888, function(){
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});