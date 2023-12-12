const fs = require("fs");

exports.addUser = (ctx) => {
    const from = ctx.update.message.from;
    new_user = {
      id: from.id,
      username: from.username,
      name_: from.first_name,
      isCountry: false,
      isAge: false,
      isBuilt: false,
      isTested: false,
      isCandidate: false,
    };
    let data;
    let obj = fs.readFileSync("./assets/users.json", 'utf-8')
    if (obj) {
        data = JSON.parse(obj);
        for (let i of data.users) {
            i.id === new_user.id ? null : data.users.push(new_user);
        }
    } else {
        data = {
        users: [],
        };
        data.users.push(new_user)
    }
    fs.writeFileSync("./assets/users.json", JSON.stringify(data));
    ctx.sendMessage(`Hello, ${new_user.name_}, how are you ??`)
  }