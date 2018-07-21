const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/mariochar');

//describe tests
describe('Updating records', function(){

var char;

  beforeEach(function(done){
    char = new MarioChar({
      name:'Mario',
      weight:50
    });

    char.save().then(function(){
      assert(char.isNew === false);
      done();
    });
  });

  //create tests
  it('Update record',function(done){

    MarioChar.findOneAndUpdate({name:'Mario'},{name:'Luigi'}).then(function(){
      MarioChar.findOne({_id:char._id}).then(function(result){
        assert(result.name === 'Luigi');
        done();
      });
    });

  })

  //next test

  it('Increment the wights by 1',function(done){

    MarioChar.update({},{$inc:{weight:1}}).then(function(){
      MarioChar.findOne({name:'Mario'}).then(function(record){
        assert(record.weight === 51);
        console.log(record.weight);
        done();
      });
    });

});

});
