'use strict';

const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

let messageStore = 'hello from server';

wss.on('connection', function connection(ws) {
  ws.on('message', function message(msg) {
    messageStore += msg;
    console.log(messageStore);
    wss.broadcast(messageStore);
  });
  wss.broadcast(messageStore);
});
wss.broadcast = function broadcast(msg) {
  wss.clients.forEach(function each(client) {
      client.send(msg);
   });
};
