const assert = require('assert');
const mongoose = require('mongoose');
const Author = require('../models/author');

//describe block

describe('Nesting records',function(){

  beforeEach(function(done){
    mongoose.connection.collections.authors.drop(function(){
      done();
    })
  })

//create first testt

it('Creates and author with sub docs',function(done){
  var par = new Author({
    name:'nikola dim',
    books:[{title:'Mr nick',pages:300}]
  });

  par.save().then(function(){
    Author.findOne({name:'nikola dim'}).then(function(record){
      assert(record.books.length === 1);
      done();
    });
  });

});

it('adds a book to an author',function(done){
  var par = new Author({
    name:'nikola dim',
    books:[{title:'Mr nick',pages:300}]
  });

  par.save().then(function(){
    Author.findOne({name:'nikola dim'}).then(function(record){
      //add a book to a book array
      record.books.push({title:'nice one nice',pages:150});
      record.save().then(function(){
        Author.findOne({name:'nikola dim'}).then(function(result){
          assert(result.books.length === 2);
          done();
        })
      });
    });
  });

});

})
