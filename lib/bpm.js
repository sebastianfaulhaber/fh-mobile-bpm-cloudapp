var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var $fh = require('fh-mbaas-api');

function bpmRoute() {
  var bpm = new express.Router();
  bpm.use(cors());
  bpm.use(bodyParser());

  bpm.post('/testRequest', function(req, res) {
    $fh.service({
        guid: "3m3gujrwux6jo6fjx44npd35",
        path: "/bpm/testRequest",
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


  bpm.post('/startProcess', function(req, res) {
    $fh.service({
        guid: "3m3gujrwux6jo6fjx44npd35",
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
          guid: "3m3gujrwux6jo6fjx44npd35",
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
        guid: "3m3gujrwux6jo6fjx44npd35",
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
      "guid": "3m3gujrwux6jo6fjx44npd35",
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
      "guid": "3m3gujrwux6jo6fjx44npd35",
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
      "guid": "3m3gujrwux6jo6fjx44npd35",
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
      "guid": "3m3gujrwux6jo6fjx44npd35",
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
      "guid": "3m3gujrwux6jo6fjx44npd35",
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
