const path = require("path");

let executablePath;

switch (process.platform) {
    case "win32":
        executablePath = path.join(__dirname, "bin/win32/unrar.exe");
        break;
    case "linux":
        executablePath = path.join(__dirname, "bin/linux/unrar-" + process.arch);
        break;
    case "darwin":
        executablePath = path.join(__dirname, "bin/darwin/unrar");
        break;
    default:
        throw new Error("this package is incompatible with platform " + process.platform);
}

module.exports = executablePath;
