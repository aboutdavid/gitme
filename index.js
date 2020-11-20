var startTime = new Date().valueOf();
const config = require("./config.js");
const ejs = require("ejs");
const fs = require("fs");
const nunjucks = require("nunjucks");
const core = require("@actions/core");
const md = require("markdown-it")({
  html: true,
  linkify: true,
  typographer: true
});

console.log("=== GitME, the README.md generator for GitHub ===");
console.log("Version: 0.0.1");
console.log(`Reading ${config.renderFile}...`);

// Read the file
var str = fs.readFileSync(config.renderFile, "utf8");

// We will require our data file, which scans our directory and compiles all of the .js files into one onject
console.log("Compiling data...");
var data = require("./data.js");
console.log(`Rendering ${config.renderFile} with ${config.renderEngine}`);

// Render ejs
if (config.renderEngine == "ejs") {
  var res = ejs.render(str, data);
} else if (config.renderEngine == "nunjucks") {
  var res = nunjucks.renderString(str, data);
} else {
  throw new Error(
    `${config.renderEngine} is not a valid rendering engine. Please see (inserturlhere) to see valid rendering engines.`
  );
  process.exit(1);
}

// Render Markdown
console.log("Rendering Markdown...");
res = md.render(res);
console.log("Saving the README file.");
// Save .md file
fs.writeFileSync("README.md", res);

console.log("Pushing the README file to GitHub...")
require("./run.js").command("git", [
  "config",
  "--global",
  "user.email",
  `${process.env.EMAIL}`
]);
require("./run.js").command("git", [
  "config",
  "--global",
  "user.name",
  `${process.env.NAME}`
]);
require("./run.js").command("git", ["add", "README.md"]);
require("./run.js").command("git", [
  "commit",
  "-m",
  '"[skip ci] GitME compiled README file."'
]);
require("./run.js").command("git", [
  "push",
  `https://${process.env.GITHUB_TOKEN}@github.com/${process.env.REPO}.git`,
  process.env.BRANCH
]);

console.log(
  `GitME compilied your (awesome) README.md file in ${(new Date().valueOf() -
    startTime) /
    1000} seconds!`
);
