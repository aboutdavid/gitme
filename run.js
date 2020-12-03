function command(cmd, args){
const { spawn } = require("child_process");
var cmd = spawn(cmd, args);

cmd.stdout.on("data", data => {
    console.log(data.toString());
});

cmd.stderr.on("data", data => {
    console.error(data.toString());
});

cmd.on('error', (error) => {
    console.error(error.message.toString());
});

cmd.on("close", code => {
    console.log(`child process exited with code: ${code}`.toString());
    if (code == "0" || code == 0){
        console.error("exiting...")
        process.exit(code)
    }
});
}
module.exports = {command}
