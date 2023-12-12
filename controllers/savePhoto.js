const fs = require("fs")

exports.saver = async (id, file) => {
    console.log(file);
    fs.writeFile("./assets/pics", file)
}