var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var fh = require('fh-mbaas-api');

function bpmRoute() {
  var bpm = new express.Router();
  bpm.use(cors());
  bpm.use(bodyParser());


  // GET REST endpoint - query params may or may not be populated
  bpm.post('/startProcess', function(req, res) {

    fh.service({
      "guid": "wbyyx52jcku3ynnqywa666ry",
      "path": "/bpm/startProcess",
      "method": "POST",
      "headers": {
         "Content-Type" : "application/json"
      },
      "params": {"claimid" : "12345"}
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

  return bpm;
}

module.exports = bpmRoute;
