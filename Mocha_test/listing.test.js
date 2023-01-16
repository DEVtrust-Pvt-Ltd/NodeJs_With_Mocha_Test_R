"use strict";

import supertest from  "supertest";
import should from  "should";

var apiMain = supertest.agent("{{host}}");

//Test Case to get all Listings data ForSlider 

describe("Get Listings data ForSlider", function() {
  this.timeout(10000);

  it.only("# Test the get Listings data ForSlider", function(done) {
    apiMain
      .get("/listings/getListingsForSlider")
      .expect(200)
      .end(function(err, res) {
        if (err) {
          return done(err); 
        }
         var data=JSON.parse(res.text);
         data.should.have.property("status");  // checking the status of listings
         done();
      });
  });
});


