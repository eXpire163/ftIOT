var mows = require('mows');

var server = mows.createServer(function(client) {
  client.connack({
    returnCode: 0
  });
});

server.listen(1884);