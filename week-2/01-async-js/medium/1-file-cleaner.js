const { error } = require("console");
const fs = require("fs");
const file =
  "P:/WebDevelopment/Harkirat/chort 2 0-1/100xdev-cohort-2-assignments/week-2/01-async-js/File/data.txt";

fs.readFile(file, "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  let filteredData = data.replace(/\s+/g, " ").trim();
  fs.writeFile(file, filteredData, "utf-8", (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("File Successfully modified");
  });
});
