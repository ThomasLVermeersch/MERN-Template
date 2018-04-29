const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const PythonShell = require('python-shell');
const mongoose = require('mongoose');
const config = require('./config');
const User = require('./schemas/user');
const session = require('express-session');
mongoose.connect(config.MONGODB_URL);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to db");
  var User = db.collection('Users');
});


const app = express();

//view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Set static path
app.use(express.static(path.join(__dirname, 'public')));

//use sessions for tracking logins
app.use(session({
  secret: 'secret key',
  resave: true,
  saveUninitialized: false
}));


//routes
app.get('/', (req, res) =>{
	res.render('index');
});

app.post('/signin', function(req, res, next) {
  if (req.body.logemail && req.body.logpassword) {
    User.authenticate(req.body.logemail, req.body.logpassword, function (error, user) {
       if (error || !user) {
         var err = new Error('Wrong email or password.');
         err.status = 401;
         return next(err);
      } else {
         req.session.userId = user._id;
         console.log(req.session.userId);
         return res.redirect('/');
       }
     });
   } else {
    var err = new Error('Email and password are required.');
    err.status = 401;
    var err = new Error('All fields required.');
    err.status = 400;
     return next(err);
   }
});

app.post('/signup', (req, res) =>{
  if (req.body.email &&
     req.body.fname &&
     req.body.lname &&
     req.body.password &&
     req.body.passwordConf) {
    var userData = {
      email: req.body.email,
      first_name: req.body.fname,
      last_name: req.body.lname,
      password: req.body.password
    }
    //use schema.create to insert data into the db
    User.create(userData, function (err, user) {
      console.log(userData);
      if (err) {
        console.log(err);
        return err;
      } else {
        req.session.userId = user._id;
        return res.redirect('/');
      }
    });
  } else {
    console.log(req.body);
  }
});

app.listen('3000', () =>{
	console.log('Server started on port 3000');
});


