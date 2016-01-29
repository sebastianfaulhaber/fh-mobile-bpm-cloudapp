var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var fh = require('fh-mbaas-api');

function bpmRoute() {
  var bpm = new express.Router();
  bpm.use(cors());
  bpm.use(bodyParser());


  // GET REST endpoint - query params may or may not be populated
  bpm.get('/', function(req, res) {

    fh.service({
      "guid": "wbyyx52jcku3ynnqywa666ry",
      "path": "/bpm/startProcess",
      "method": "POST",
      "headers": {
         "Content-Type" : "application/json"
      },
      "params": {
        "claimid": "1",
    }
    }, function(err, body, res) {
      console.log('statuscode: ', res && res.statusCode);
      if ( err ) {
        // An error occurred during the call to the service. log some debugging information
        console.log('service call failed - err : ', err);
      } else {
        console.log('Got response from service - status body : ', res.statusCode, body);
      }
    });

  });

  // POST REST endpoint - note we use 'body-parser' middleware above to parse the request body in this route.
  // This can also be added in application.js
  // See: https://github.com/senchalabs/connect#middleware for a list of Express 4 middleware
  bpm.post('/', function(req, res) {
  });

  return bpm;
}

module.exports = bpmRoute;
