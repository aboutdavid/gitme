const fs = require("fs");
// Scan the data directory and only get items that end with .js
const files = fs.readdirSync("./data").filter(file => file.endsWith(".js"));
// Loop through the folder, then combine it into a big onject
var i = 0;
var obj = {};
while (i < files.length) {
  obj[files[i].replace(".js", "")] = require(`./data/${files[i]}`);
  i++;
}
module.exports = obj;
