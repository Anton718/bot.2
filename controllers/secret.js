const fs = require("fs");
require("dotenv").config({ path: "./.env" });

exports.secret = async (msg) => {
  const from = msg.update.message.from;
  user = {
    id: from.id,
  };
  if (user.id === Number(process.env.USER_ID)) {
    const obj = fs.readFileSync("./assets/users.json");
    const data = JSON.parse(obj);
    msg.sendMessage(JSON.stringify(data));
  } else {
    msg.sendMessage("What did you say?");
  }
};
