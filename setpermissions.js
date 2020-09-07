const fs = require("fs");
const path = require("path");

function setExecutable(path) {
    const mode = fs.statSync(path).mode;
    const executableMode = (mode | fs.constants.S_IXUSR); // set user executable bit
    console.log("setting executable mode on " + path);
    fs.chmodSync(path, executableMode);
}

const binPath = path.join(__dirname, "bin", process.platform);

fs.readdir(binPath, (err, files) => {
   if (err) {
       throw err;
   }

   files.forEach(file => setExecutable(path.join(binPath, file)));
});
