const mongoose = require('mongoose');

//ES6 promis
mongoose.Promise = global.Promise;

//connect to the databse before tests run
before(function(done){

  mongoose.connect('mongodb://localhost/testaroo');

  mongoose.connection.once('open',function(){
    console.log('connection has been made,now work with it...');
    done();
  }).on('error',function(){
    console.log('connection error',error);
  });

});


//drop the characters collection before each test
beforeEach(function(done){
  //Drop collection
  mongoose.connection.collections.mariochars.drop(function(){
    done();
  });
});

// connect to mongodb
