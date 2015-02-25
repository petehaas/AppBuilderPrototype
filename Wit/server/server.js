var wit = require('node-wit');
var fs = require('fs');
var express = require('express');
var app = express();
var ACCESS_TOKEN = "OGN7GA3ILF74HC2C2LNW4TV4SLUZAJPD";

console.log("Sending text & audio to Wit.AI");

app.use(function(req, res, next) {
    var data = new Buffer('');
    req.on('data', function(chunk) {
        data = Buffer.concat([data, chunk]);
    });
    req.on('end', function() {
        //req.rawBody = data;
        processTranscription(data);
        next();
    });
});

function processTranscription(data) {
    wit.captureSpeechIntent(ACCESS_TOKEN, data, "audio/wav", function (err, res) {
        console.log("Response from Wit for audio stream: ");
        if (err) console.log("Error: ", err);
        console.log(JSON.stringify(res, null, " "));
        res.send(JSON.stringify(res));
    });
}

app.listen("8000", function() {
    console.log('Express server listening on port 8000');
    console.log('env = ' + app.get('env') +
    '\n__dirname = ' + __dirname  +
    '\nprocess.cwd = ' + process.cwd());
});



/*
var stream = fs.createReadStream('sample.wav');
wit.captureSpeechIntent(ACCESS_TOKEN, stream, "audio/wav", function (err, res) {
    console.log("Response from Wit for audio stream: ");
    if (err) console.log("Error: ", err);
    console.log(JSON.stringify(res, null, " "));
});
*/
