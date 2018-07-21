const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/mariochar');

//describe tests
describe('Saving records', function(){

  //create tests
  it('save a recort to the database',function(done){
    var char = new MarioChar({
      name:'Mario'
    });

    char.save().then(function(){
      assert(char.isNew === false);
      done();
    });

  });

  //next test

});
