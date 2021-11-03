const { MESSAGESMAP, DIRECTIONSMAP, INTERVAL } = require("./constants")

let connection;

const handleUserInput = (input) => {

  if (input === '\u0003') {
    console.log("Thank you for playing.")
    process.exit();
  };

  if (DIRECTIONSMAP[input]) {
    setInterval(() => {
      connection.write("Move: " + DIRECTIONSMAP[input]);
    }, INTERVAL);
  }

  if (MESSAGESMAP[input]) connection.write("Say: " + MESSAGESMAP[input]);

}

const setupInput = function (conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  connection = conn;

  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = setupInput;