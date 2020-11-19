const config = require("./config.js");
const ejs = require("ejs");
const fs = require('fs'); 

var data = require("./data.js");
var res = ejs.render(fs.readFileSync("index.ejs", "utf8"), data);
console.log(res)