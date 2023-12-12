require("dotenv").config({ path: "./.env" });
const { Telegraf } = require("telegraf");
const { message } = require("telegraf/filters");
const { key_origin } = require("./assets/keyboards");
const bot = new Telegraf(process.env.TOKEN);
const country = require("./controllers/country");
const appendUser = require("./controllers/appendUser")

bot.start(appendUser.addUser);

bot.on(message("text"), async (ctx) => {
  ctx.sendMessage(`Where are you from ?`, key_origin);
});

bot.on("callback_query", country.checkCountry);

bot.launch();
