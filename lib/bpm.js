var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var $fh = require('fh-mbaas-api');

function bpmRoute() {
  var bpm = new express.Router();
  bpm.use(cors());
  bpm.use(bodyParser());


  // GET REST endpoint - query params may or may not be populated
  bpm.post('/startProcess', function(req, res) {
    $fh.service({
        guid: "rqk2poijk5izmnzogliihzku",
        path: "/bpm/startProcess",
        method: "POST",
        headers: {
           "Content-Type" : "application/json"
        },
        params: {
          "params": req.body
        }
      }, function(err, data) {
        if (err) {
          res.json(err);
        }
        res.json(data);
      });

  });

  bpm.post('/getProcess', function(req, res) {
      $fh.service({
          guid: "rqk2poijk5izmnzogliihzku",
          path: "/bpm/getProcess",
          method: "POST",
          headers: {
             "Content-Type" : "application/json"
          },
          params: {
            "params": req.body
          }
        }, function(err, data) {
          if (err) {
            res.json(err);
          }
          res.json(data);
        });

    });

  bpm.post('/loadTasks', function(req, res) {
    $fh.service({
        guid: "rqk2poijk5izmnzogliihzku",
        path: "/bpm/loadTasks",
        method: "POST",
        headers: {
           "Content-Type" : "application/json"
        },
        params: {
          "params": req.body
        }
      }, function(err, data) {
        if (err) {
          res.json(err);
        }
        res.json(data);
      });

  });

  bpm.post('/loadTaskContent', function(req, res) {
    $fh.service({
      "guid": "rqk2poijk5izmnzogliihzku",
      "path": "/bpm/loadTaskContent",
      "method": "POST",
      "headers": {
         "Content-Type" : "application/json"
      },params: {
        "params": req.body
      }
    }, function(err, data) {
      if (err) {
        res.json(err);
      }
      res.json(data);
    });

  });

  bpm.post('/completeTask', function(req, res) {
    $fh.service({
      "guid": "rqk2poijk5izmnzogliihzku",
      "path": "/bpm/completeTask",
      "method": "POST",
      "headers": {
         "Content-Type" : "application/json"
      },params: {
        "params": req.body
      }
    }, function(err, data) {
      if (err) {
        res.json(err);
      }
      res.json(data);
    });

  });

  bpm.post('/claimTask', function(req, res) {
    $fh.service({
      "guid": "rqk2poijk5izmnzogliihzku",
      "path": "/bpm/claimTask",
      "method": "POST",
      "headers": {
         "Content-Type" : "application/json"
      },params: {
        "params": req.body
      }
    }, function(err, data) {
      if (err) {
        res.json(err);
      }
      res.json(data);
    });

  });

  bpm.post('/startTask', function(req, res) {
    $fh.service({
      "guid": "rqk2poijk5izmnzogliihzku",
      "path": "/bpm/startTask",
      "method": "POST",
      "headers": {
         "Content-Type" : "application/json"
      },params: {
        "params": req.body
      }
    }, function(err, data) {
      if (err) {
        res.json(err);
      }
      res.json(data);
    });

  });

  bpm.post('/releaseTask', function(req, res) {
    $fh.service({
      "guid": "rqk2poijk5izmnzogliihzku",
      "path": "/bpm/releaseTask",
      "method": "POST",
      "headers": {
         "Content-Type" : "application/json"
      },params: {
        "params": req.body
      }
    }, function(err, data) {
      if (err) {
        res.json(err);
      }
      res.json(data);
    });

  });

  return bpm;
}

module.exports = bpmRoute;
