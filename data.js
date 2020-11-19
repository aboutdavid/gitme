const fs = require("fs");

const files = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

var i = 0;
var obj = {}
while(i < files.length){
  obj[files[i]] = require(`./`)
}