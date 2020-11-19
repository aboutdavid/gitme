const fs = require("fs");

const files = fs.readdirSync("./data").filter(file => file.endsWith(".js"));

var i = 0;
var obj = {};
while (i < files.length) {
  obj[files[i].replace(".js", "")] = require(`./data/${files[i]}`);
  i++;
}
module.exports = obj;
