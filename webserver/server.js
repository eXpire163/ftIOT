var shell = require('shelljs');
var express = require('express');


var app = express();

var server = require('http').Server(app);


server.listen(8081);
console.log('Server running at http://localhost:8081/');
console.log('this file is in /home/pi/noderoot/server/server.js');
console.log('autostart via /etc/rc.local -> forever');
console.log('upper infos deprecated');
console.log(__dirname);

app.use(express.static(__dirname + '/pages/'));
