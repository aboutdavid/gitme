const config = require("./config.js");
const ejs = require("ejs");
const fs = require("fs");
var md = require("markdown-it")({
  html: true,
  linkify: true,
  typographer: true
});

// We will require our data file, which scans our directory and compiles all of the .js files into one onject
var data = require("./data.js");
// Render ejs
var res = ejs.render(fs.readFileSync(config.renderFile, "utf8"), data);
// Render Markdown
res = md.render(res);
// Output markdown
console.log(res);
// Save .md file
fs.writeFileSync("README.md", res);
