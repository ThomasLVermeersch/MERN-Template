const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const PythonShell = require('python-shell');
const mongoose = require('mongoose');
const config = require('./config');
const User = require('./schemas/user');

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


//routes
app.get('/', (req, res) =>{
	res.render('index');
});

app.post('/signup', (req, res) =>{
  if (true) {
    var userData = {
      email: req.body.email,
      first_name: req.body.fname,
      last_name: req.body.lname,
      password: req.body.password,
      passwordConf: req.body.passwordConf
    }
    //use schema.create to insert data into the db
    User.create(userData, function (err, User) {
      console.log(userData);
      if (err) {
        console.log(err);
        return err;
      } else {
        return res.redirect('/');
      }
    });
  }
});

app.listen('3000', () =>{
	console.log('Server started on port 3000');
});