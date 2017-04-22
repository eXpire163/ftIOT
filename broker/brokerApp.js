var fs = require('fs');
var mqttServer = require('mqtt-server');

var servers = mqttServer({
  mqtt: 'tcp://localhost:1883',
  mqttws: 'ws://localhost:1884'
}, {
  emitEvents: false // default
}, function(client){
  client.connack({
    returnCode: 0
  });
});

servers.listen(function(){
  console.log('listening!');
});