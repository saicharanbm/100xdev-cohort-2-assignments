const { error } = require("console");
const fs = require("fs");
const file =
  "P:/WebDevelopment/Harkirat/chort 2 0-1/100xdev-cohort-2-assignments/week-2/01-async-js/File/data.txt";
const content = "Hello  this text is written with the help of fs library";
fs.writeFile(file, content, "utf-8", (error) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log("File has been written successfully.");
});
