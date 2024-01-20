function format24() {
  const time = new Date();
  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}
function format12() {
  const time = new Date();

  return time.toLocaleTimeString();
}

setInterval(() => {
  console.log("24-hour-format", format24());
  console.log("12-hour-format", format12());
}, 1000);
