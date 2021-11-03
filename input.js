let connection;

const handleUserInput = (input) => {
  
  if (input === '\u0003') {
    console.log("Thank you for playing.")
    process.exit();
  };

  const directionsMap = {
    w: "Move: up",
    a: "Move: left",
    s: "Move: down",
    d: "Move: right"
  }

  if (!directionsMap[input]) return

  connection.write(directionsMap[input]);
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