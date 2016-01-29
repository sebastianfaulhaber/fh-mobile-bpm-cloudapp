var mbaasApi = require('fh-mbaas-api');
var express = require('express');
var mbaasExpress = mbaasApi.mbaasExpress();
var cors = require('cors');

// list the endpoints which you want to make securable here
var securableEndpoints;
securableEndpoints = ['/bpm'];

var app = express();

// Enable CORS for all requests
app.use(cors());

// Note: the order which we add middleware to Express here is important!
app.use('/sys', mbaasExpress.sys(securableEndpoints));
app.use('/mbaas', mbaasExpress.mbaas);

// allow serving of static files from the public directory
app.use(express.static(__dirname + '/public'));

// Note: important that this is added just before your own Routes
app.use(mbaasExpress.fhmiddleware());

app.use('/bpm', require('./lib/bpm.js')());

// Important that this is last!
app.use(mbaasExpress.errorHandler());

var port = process.env.FH_PORT || process.env.OPENSHIFT_NODEJS_PORT || 8001;
var host = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
app.listen(port, host, function() {
  console.log("App started at: " + new Date() + " on port: " + port);
});

//#############################################################################
//# FORM SUBMISSION LISTENER
//#############################################################################

//NodeJS Events Module. Note, this is required to register event emitter objects to forms.
var events = require('events');
var submissionEventListener = new events.EventEmitter();

submissionEventListener.on('submissionComplete', function(params) {
  var submissionId = params.submissionId;
  var submissionCompletedTimestamp = params.submissionCompletedTimestamp;
  console.log("Submission with ID " + submissionId + " has completed at " + submissionCompletedTimestamp);

  // Prepare params for REST call
  var myParamsForRESTCall = "";
  for (var i = 0; i < params.submission.formFields.length; i++) {
    myParamsForRESTCall += "&map_";
    myParamsForRESTCall += params.submission.formFields[i].fieldId.fieldCode;
    myParamsForRESTCall += "=";
    myParamsForRESTCall += params.submission.formFields[i].fieldValues[0];
  }
  console.log("myParamsForRESTCall = " + myParamsForRESTCall);

  // Execute REST Call to BPM
  var http = require('http');
  var options = {
    hostname: '209.132.179.9',
    port: 8080,
    path: '/business-central/rest/runtime/test:stp:1.0/process/stp.my-process/start?' + myParamsForRESTCall,
    method: 'POST',
    auth: 'erics:bpmsuite1!',
    headers: {
      'Accept': 'application/json',
    }
  };

  var req = http.request(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function(chunk) {
      console.log('BODY: ' + chunk);
    });
    res.on('end', function() {
      console.log('No more data in response.')
    })
  });

  req.on('error', function(e) {
    console.log('Problem with request: ' + e.message);
  });

  req.write("");
  req.end();

});

mbaasApi.forms.registerListener(submissionEventListener, function(err) {
  if (err) return handleError(err);
  //submissionEventListener has now been registered with the $fh.forms Cloud API. Any valid Forms Events will now emit.
});
