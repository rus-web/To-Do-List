const WebSocket = require("ws");
const server = new WebSocket.Server({port: 9000});

server.on("connection", onConnect);

function onConnect(client) {
    console.log("Connection opened");
      // обрабатываем входящие сообщения от клиента
      client.on("message", function(message) {
          console.log("Client message:", message.toString());    // для диагностики сообщения клиента на консоль
          client.send(message.toString()) // отправка сообщения клиенту
      });
      // закрытие подключения
      client.on("close", function() {
          console.log("Connection closed");
      });
  }