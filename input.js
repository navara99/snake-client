const handleUserInput = (input) => {
  switch (input) {
    case '\u0003':
      process.exit();
    case "w":
      console.log(input)
      break;
    case "a":
      console.log(input)
      break;
    case "s":
      console.log(input)
      break;
    case "d":
      console.log(input)
      break;
  }
}

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = setupInput;