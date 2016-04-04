/**
 * Created by Adam on 2016-04-02.
 */

var express = require('express');

var app = express();
var port     = process.env.PORT || 3000;

var database = require('./config/database.js');
var passport = require('passport');
var flash    = require('connect-flash');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
var path = require('path');


var connect = database.startdb;




connect.query('insert into login (firstname, lastname,password) values ("adam", "boyle", "iamtheman")', function(err, rows, fields) {
    if (err) throw err;
    console.log("entered data into row");
});


var htmlPath = path.join(__dirname , 'views');
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(__dirname));
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms

app.set('view engine', 'ejs'); // set up ejs for templating


// required for passport
app.use(session({ secret: 'fucklikerabbits' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
//require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport


app.get('/', function (req, res) {
    res.render(path.join(htmlPath , 'index.ejs') );
});

app.get('/login', function (req, res) {
    res.render(path.join(htmlPath , 'login.ejs') );
});


app.get('/profile', function (req, res) {
    res.render(path.join(htmlPath , 'profile.ejs') );
});

app.get('/signup', function (req, res) {
    res.render(path.join(htmlPath , 'signup.ejs') );
});

app.get('*', function(req, res){
    res.render( path.join(htmlPath , 'login.ejs') );
});




app.listen(port, function () {
    console.log('Example app listening on' + port);
});
//connection.end();