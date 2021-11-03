let connection;

const handleUserInput = (input) => {

  if (input === '\u0003') {
    console.log("Thank you for playing.")
    process.exit();
  };

  const directionsMap = {
    w: "up",
    a: "left",
    s: "down",
    d: "right"
  };

  const messagesMap = {
    "?" : "Built different",
    h : "Hello there.",
    l: "Lets play!",
    n: "I am snek.",
    p: ":)"
  };

  if (directionsMap[input]) connection.write("Move: " + directionsMap[input]);
  if (messagesMap[input]) connection.write("Say: " + messagesMap[input]);

}

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);




  return stdin;
};

module.exports = setupInput;