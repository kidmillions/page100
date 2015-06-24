"use strict";


// var chai = require("chai");
// var assert = chai.assert;
// var expect = chai.expect;
// var should = chai.should();

//supertest module removes the need for hard-coded port numbers
var request = require("supertest");
var app = require("./../server/server.js");
var server;
//see server/testposts.js for posts with which we will test

describe("server", function() {
  before(function(){
    server = app.listen(8000);
  });

  after(function(){
    server.close();
  });

  describe("Home routes", function(){
    it("return 200 status code from '/'' on localhost", function(done){
      request(server).get("/user/").expect(200, function(err){
        console.log("error: ", err);
      }).end(done);
    });

    it("returns 404 status code from 'elbow' on localhost", function(done){
      request(server).get("/ardvark").expect(404, function(err){
        console.log("error: ", err);
      }).end(done);
    });
  });


});






// describe("Signing up", function() {

// });

// describe("Logging in", function() {

// });

// describe("Getting User Stack", function() {

// });

// describe("Adding to stack", function() {

// });

// describe("removing from stack", function() {

// });

// describe("receiving books to rate", function(){
//   it("returns 200 status when getting books", function(done){
//     request(app).get("/books/getbooks?count=10&user=1").expect(200, function(err) {
//       console.log("error: ", err);
//       // result.should.not.be.empty;
//     }).end(done);
//   });
// });
