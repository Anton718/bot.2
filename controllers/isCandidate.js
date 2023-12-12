const fs = require("fs")

exports.yes = async (id) => {
    const obj = fs.readFileSync("./assets/users.json")
    const data = JSON.parse(obj)
    for (let i of data.users) {
        if (i.id === id && i.isCandidate === true) {
            return true;
        }
    }
}