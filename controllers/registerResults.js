const fs = require("fs")

exports.isCountry = async (user, country) => {
        const obj = fs.readFileSync("./assets/users.json")
        const data = JSON.parse(obj)
        for (let i of data.users) {
            if (user === i.id) {
                if (i.isTested === false) {
                        i.isCountry = country   
                    } else {
                        null
                    }
                }
            }
        fs.writeFileSync("./assets/users.json", JSON.stringify(data))
    }

exports.isAge = (user, age) => {
    const obj = fs.readFileSync("./assets/users.json")
    const data = JSON.parse(obj)
    for (let i of data.users) {
        if (user === i.id) {
            if (i.isTested === false) {
                    i.isAge = age   
                } else {
                    null
                }
            }
        }
    fs.writeFileSync("./assets/users.json", JSON.stringify(data))
}

exports.isBuilt = (user, built) => {
    const obj = fs.readFileSync("./assets/users.json")
    const data = JSON.parse(obj)
    for (let i of data.users) {
        if (user === i.id) {
            if (i.isTested === false) {
                    i.isBuilt = built 
                    i.isTested = true  
                } else {
                    null
                }
            }
        }
    fs.writeFileSync("./assets/users.json", JSON.stringify(data))
}