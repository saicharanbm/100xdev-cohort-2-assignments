const fs = require("fs");
const file =
  "P:/WebDevelopment/Harkirat/chort 2 0-1/100xdev-cohort-2-assignments/week-2/01-async-js/File/data.txt";
fs.readFile(file, "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }

  // Process the content here
  console.log(data);
});
console.log("task-1 start");
for (let index = 0; index < 100000000000; index++) {}
console.log("task - 1 complete");

console.log("task-2 start");
for (let index = 0; index < 10000000; index++) {}
console.log("task - 2 complete");
