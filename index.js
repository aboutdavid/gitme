

const config = require("./config.js");
const ejs = require("ejs");
const fs = require("fs");
const md = require("markdown-it")({
  html: true,
  linkify: true,
  typographer: true
});
const nunjucks = require("nunjucks")

// Read the file
var str = fs.readFileSync(config.renderFile, "utf8")
// We will require our data file, which scans our directory and compiles all of the .js files into one onject
var data = require("./data.js");
// Render ejs
if(config.renderEngine =="ejs"){
var res = ejs.render(str, data);
} else if(config.renderEngine =="nunjucks"){
  var res = nunjucks.renderString(str, data);
} else {
  throw new Error(`${config.renderEngine} is not a valid rendering engine. Please see (inserturlhere) to see valid rendering engines.`);
  process.exit(1);
}
// Render Markdown
res = md.render(res);
// Output markdown
console.log(res);
// Save .md file
fs.writeFileSync("README.md", res);
