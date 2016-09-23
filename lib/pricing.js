var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var $fh = require('fh-mbaas-api');

function pricingRoute() {
  var pricing = new express.Router();
  pricing.use(cors());
  pricing.use(bodyParser());

  var serviceGuid = process.env.PRICING_MBAAS_SERVICE_ID;
  if (serviceGuid === undefined || serviceGuid.length === 0) {
    
    console.err("No service id for the PRICING MBaaS Service set in Environment variables");
    console.err("Please define the following enviroment variable: PRICING_MBAAS_SERVICE_ID");

  } else {

    pricing.post('/calculate', function (req, res) {
      $fh.service({
        "guid": serviceGuid,
        "path": "/pricing/calculate",
        "method": "POST",
        "headers": { 
          "Content-Type" : "application/json" 
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

  return pricing;
}

module.exports = pricingRoute;
