var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var $fh = require('fh-mbaas-api');

function bpmRoute() {
  var bpm = new express.Router();
  bpm.use(cors());
  bpm.use(bodyParser());

  var serviceGuid = process.env.BPM_MBAAS_SERVICE_ID;
  if (serviceGuid === undefined || serviceGuid.length === 0) {
    
    console.err("No service id for the BPM MBaaS Service set in Environment variables");
    console.err("Please define the following enviroment variable: BPM_MBAAS_SERVICE_ID");

  } else {

    bpm.post('/startProcess', function (req, res) {
      $fh.service({
        guid: serviceGuid,
        path: "/bpm/startProcess",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        "params": req.body
      }, function (err, data) {
        if (err) {
          res.json(err);
        }
        res.json(data);
      });
    });

    bpm.post('/getProcessInstance', function (req, res) {
      $fh.service({
        guid: serviceGuid,
        path: "/bpm/getProcessInstance",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        "params": req.body
      }, function (err, data) {
        if (err) {
          res.json(err);
        }
        res.json(data);
      });

    });

    bpm.post('/getProcessInstanceList', function (req, res) {
      $fh.service({
        guid: serviceGuid,
        path: "/bpm/getProcessInstanceList",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        "params": req.body
      }, function (err, data) {
        if (err) {
          res.json(err);
        }
        res.json(data);
      });

    });

    bpm.post('/loadProcessContent', function (req, res) {
      $fh.service({
        "guid": serviceGuid,
        "path": "/bpm/loadProcessContent",
        "method": "POST",
        "headers": {
          "Content-Type": "application/json"
        },
        "params": req.body
      }, function (err, data) {
        if (err) {
          res.json(err);
        }
        res.json(data);
      });

    });

    bpm.post('/loadTasks', function (req, res) {
      $fh.service({
        guid: serviceGuid,
        path: "/bpm/loadTasks",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        "params": req.body
      }, function (err, data) {
        if (err) {
          res.json(err);
        }
        res.json(data);
      });

    });

    bpm.post('/runtimeTaskQuery', function (req, res) {
      $fh.service({
        guid: serviceGuid,
        path: "/bpm/runtimeTaskQuery",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        "params": req.body
      }, function (err, data) {
        if (err) {
          res.json(err);
        }
        res.json(data);
      });

    });

    bpm.post('/loadTaskContent', function (req, res) {
      $fh.service({
        "guid": serviceGuid,
        "path": "/bpm/loadTaskContent",
        "method": "POST",
        "headers": {
          "Content-Type": "application/json"
        },
        "params": req.body
      }, function (err, data) {
        if (err) {
          res.json(err);
        }
        res.json(data);
      });

    });

    bpm.post('/completeTask', function (req, res) {
      $fh.service({
        "guid": serviceGuid,
        "path": "/bpm/completeTask",
        "method": "POST",
        "headers": {
          "Content-Type": "application/json"
        },
        "params": req.body
      }, function (err, data) {
        if (err) {
          res.json(err);
        }
        res.json(data);
      });

    });

    bpm.post('/claimTask', function (req, res) {
      $fh.service({
        "guid": serviceGuid,
        "path": "/bpm/claimTask",
        "method": "POST",
        "headers": {
          "Content-Type": "application/json"
        },
        "params": req.body
      }, function (err, data) {
        if (err) {
          res.json(err);
        }
        res.json(data);
      });

    });

    bpm.post('/startTask', function (req, res) {
      $fh.service({
        "guid": serviceGuid,
        "path": "/bpm/startTask",
        "method": "POST",
        "headers": {
          "Content-Type": "application/json"
        },
        "params": req.body
      }, function (err, data) {
        if (err) {
          res.json(err);
        }
        res.json(data);
      });

    });

    bpm.post('/releaseTask', function (req, res) {
      $fh.service({
        "guid": serviceGuid,
        "path": "/bpm/releaseTask",
        "method": "POST",
        "headers": {
          "Content-Type": "application/json"
        },
        "params": req.body
      }, function (err, data) {
        if (err) {
          res.json(err);
        }
        res.json(data);
      });

    });
  }

  return bpm;
}

module.exports = bpmRoute;
