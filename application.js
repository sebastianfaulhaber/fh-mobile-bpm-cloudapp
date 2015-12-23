var mbaasApi = require('fh-mbaas-api');
var express = require('express');
var mbaasExpress = mbaasApi.mbaasExpress();
var cors = require('cors');

// list the endpoints which you want to make securable here
var securableEndpoints;
securableEndpoints = ['/hello'];

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

app.use('/hello', require('./lib/hello.js')());

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

submissionEventListener.on('submissionComplete', function(params){
  var submissionId = params.submissionId;
  var submissionCompletedTimestamp = params.submissionCompletedTimestamp;
  console.log("Submission with ID " + submissionId + " has completed at " + submissionCompletedTimestamp);
  
  mbaasApi.forms.getSubmission({
  "submissionId": submissionId
    }, function (err, submission) {
    if (err) return handleError(err);
      console.log("###sub###" + submission);
      return callback(undefined, submission); 
    });
});

mbaasApi.forms.registerListener(submissionEventListener, function(err){
  if (err) return handleError(err);
  //submissionEventListener has now been registered with the $fh.forms Cloud API. Any valid Forms Events will now emit.
});