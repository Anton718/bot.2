const fs = require("fs")

exports.final = async (id) => {
   const obj =  fs.readFileSync("./assets/users.json")
   const data = JSON.parse(obj)
   let result = 0;
   for (let user of data.users) {
    if (user.id === id) {
            user.isCountry ? result += 1 : null;
            user.isAge ? result += 1 : null;
            user.isBuilt ? result += 1 : null;
            result >= 2 ? user.isCandidate = true : user.isCandidate = false; 
            fs.writeFileSync("./assets/users.json", JSON.stringify(data))
        }
   }
}