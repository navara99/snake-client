const IP = "10.0.2.15";
const PORT = "50541";
const INITIALS = "TN";
const INTERVAL = 50;

const DIRECTIONSMAP = {
  w: "up",
  a: "left",
  s: "down",
  d: "right"
};

const MESSAGESMAP = {
  "?": "Built different",
  h: "Hello there.",
  l: "Lets play!",
  n: "I am snek.",
  p: ":)"
};

module.exports = {
  IP,
  PORT,
  INITIALS,
  DIRECTIONSMAP,
  MESSAGESMAP,
  INTERVAL
}