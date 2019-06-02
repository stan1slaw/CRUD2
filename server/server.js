const express = require('express'),
 app = express(),
 bodyParser = require('body-parser'),
 PORT = 4000,
 cors = require('cors'),
 mongoose = require('mongoose'),
 config = require('./DB.js'),
 PostRoutes = require('./routes/route.js');
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);
app.use('/posts',PostRoutes);
app.listen(PORT,function(){
    console.log(`server is running on port ${PORT}`)

})