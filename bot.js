require("dotenv").config({ path: "./.env" });
const { Telegraf } = require("telegraf");
const { message } = require("telegraf/filters");
const { key_origin } = require("./assets/keyboards");
const bot = new Telegraf(process.env.TOKEN);
const callbacks = require("./controllers/callbacks");
const appendUser = require("./controllers/appendUser")
const savePhoto = require("./controllers/savePhoto")
const https = require("https")
const fs = require("fs")

bot.start(appendUser.addUser);

bot.hears(['hi', 'Hi', 'Hello', 'hello', 'hey', 'Hey'], ctx => ctx.reply('hey'))

bot.on(message("text"), async (ctx) => {
  ctx.sendMessage(`Where are you from ?`, key_origin);
});

bot.on("callback_query", callbacks.checkCallback);

bot.on(message('photo'), async (ctx) => {
    let imageId = ctx.message.photo.pop().file_id;
    const user = ctx.update.message.from.username;
    if (!fs.existsSync(`./assets/pics/${user}`)) {
      fs.mkdirSync(`./assets/pics/${user}`)
    }
    ctx.telegram.getFileLink(imageId).then((link) => {
        https.get(link, (response) =>
            response.pipe(fs.createWriteStream(`./assets/pics/${user}/${imageId}.jpeg`))
        );
    });
    ctx.reply('😍')
});

bot.on(message("sticker"), (ctx) => {
  ctx.sendMessage('👍')
})



bot.launch();
