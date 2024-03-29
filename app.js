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
    res.sendFile(__dirname + '/public/matchgui.html');
});
app.get('/remguide%', function (req, res) {
    res.sendFile(__dirname + '/public/rematch_guide.html');
});
app.get('/newsignpolicy', function (req, res) {
    res.sendFile(__dirname + '/public/signpolicy.html');
});
app.get('/newsignpolicy%', function (req, res) {
    res.sendFile(__dirname + '/public/signpolicy.html');
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
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/gioithieu.html');
});
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
app.get('/gioithieu', function (req, res) {
    res.sendFile(__dirname + '/public/gioithieu.html');
});
app.get('/gioithieu%', function (req, res) {
    res.sendFile(__dirname + '/public/gioithieu.html');
});
app.get('/thanhtoan', function (req, res) {
    res.sendFile(__dirname + '/public/thanhtoan.html');
});
app.get('/thanhtoan%', function (req, res) {
    res.sendFile(__dirname + '/public/thanhtoan.html');
});
app.get('/signpolicy', function (req, res) {
    res.sendFile(__dirname + '/public/signpolicy.html');
});
app.get('/signpolicy%', function (req, res) {
    res.sendFile(__dirname + '/public/signpolicy.html');
});
app.get('/matchgui', function (req, res) {
    res.sendFile(__dirname + '/public/matchgui.html');
});
app.get('/matchgui%', function (req, res) {
    res.sendFile(__dirname + '/public/matchgui.html');
});
app.get('/dangky2', function (req, res) {
    res.sendFile(__dirname + '/public/dangky2.html');
});
app.get('/dangky2%', function (req, res) {
    res.sendFile(__dirname + '/public/dangky2.html');
});

var server = app.listen(8888, function(){
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});