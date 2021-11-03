const net = require("net");
const { INITIALS, IP, PORT, DIRECTIONSMAP } = require("./constants");

const connect = function () {
  console.log("Connecting ...");

  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    console.log('Message from Server: ' + data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write(`Name: ${INITIALS}`);
  });

  conn.on("end", ()=> {
    console.log("Disconnected from the server.")
  })

  return conn;
};

module.exports = connect;

