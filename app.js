const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require ('dotenv/config');

//Use of BodyParser
app.use(bodyParser.json());

//Import Routes
const postsRoute = require('./routes/posts');


//Middleware
app.use('/posts', postsRoute);


//ROUTES
app.get('/', (req, res) => {
	res.send("We are on home");
});


//Connect DB
mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => 
	console.log('connected to DB'));




//(OPEN PORTS: 22(SSH),1337(NOT USED),3000(NODEJS))
//Listen2Server
app.listen(3000, '0.0.0.0', function(){
	console.log('Listening to port:     ' + 3000);
});
