const {key_age} = require("../assets/keyboards")
const {key_built} = require("../assets/keyboards")

const sleep = require("sleep")
const registerResults = require("./registerResults")
const calcResults = require("./calcResults")
const isCandidate = require("./isCandidate")

exports.checkCallback = async (msg) => {
  const res = msg.update?.callback_query?.data;
  const path = msg.update?.callback_query?.from;
  const msg_id = msg.update?.callback_query?.message?.message_id;

  switch (res) {
    case "USA":{
      user = path.id
      country = true
      registerResults.isCountry(user, country)
      await msg.sendMessage('You are from USA');
      sleep.sleep(2)
      await msg.sendMessage("How old are you ?", key_age)
    }
      break;
    case "Europe":{
      user = path.id
      country = false
      registerResults.isCountry(user, country)
      await msg.sendMessage('You are from Europe')
      sleep.sleep(2)
      await msg.sendMessage("How old are you ?", key_age)
    }
      break;
    case "Russia":{
      user = path.id
      country = true
      registerResults.isCountry(user, country)
      await msg.sendMessage('You are from Russia')
      sleep.sleep(2)
      await msg.sendMessage("How old are you ?", key_age)
    }
      break;
    case "Turkey":{
      user = path.id
      country = false
      registerResults.isCountry(user, country)
      await msg.sendMessage('You are from Turkey')
      sleep.sleep(2)
      await msg.sendMessage("How old are you ?", key_age)
    }
      break;
    case "1":{
      user = path.id
      age = true
      registerResults.isAge(user, age)
      await msg.sendMessage('You are 18 - 22');
      sleep.sleep(2)
      await msg.sendMessage('How would you describe your built?', key_built)
    }
      break;
    case "2":{
      user = path.id
      age = true
      registerResults.isAge(user, age)
      await msg.sendMessage('You are 23 - 30')
      sleep.sleep(2)
      await msg.sendMessage('How would you describe your built?', key_built)
    }
      break;
    case "3":{
      user = path.id
      age = true
      registerResults.isAge(user, age)
      await msg.sendMessage('You are 30 - 40')
      sleep.sleep(2)
      await msg.sendMessage('How would you describe your built?', key_built)
    }
      break;
    case "4":{
      user = path.id
      age = false
      registerResults.isAge(user, age)
      await msg.sendMessage('You are over 40')
      sleep.sleep(2)
      await msg.sendMessage('How would you describe your built?', key_built)
    }
      break;
    case "Mus":{
      user = path.id
      built = true
      registerResults.isBuilt(user, built)
      await msg.sendMessage('You are muscled')
      sleep.sleep(2)
      calcResults.final(path.id)
      sleep.sleep(2)
      await msg.sendMessage("Thank you!")
      await isCandidate.yes(user)?msg.sendMessage('Mind sending a pic ?'): null
      }
      break;
    case "Ton":{
      user = path.id
      built = true
      registerResults.isBuilt(user, built)
      await msg.sendMessage('You are toned')
      sleep.sleep(2)
      calcResults.final(path.id)
      sleep.sleep(2)
      await msg.sendMessage("Thank you!")
      await isCandidate.yes(user)?msg.sendMessage('Mind sending a pic ?'): null
      }
      break;
    case "Ave":{
      user = path.id
      built = false
      registerResults.isBuilt(user, built)
      await msg.sendMessage('You are average')
      sleep.sleep(2)
      calcResults.final(path.id)
      sleep.sleep(2)
      await msg.sendMessage("Thank you!")
      await isCandidate.yes(user)?msg.sendMessage('Mind sending a pic ?'): null
      }
      break;
    case "Sli":{
      user = path.id
      built = true
      registerResults.isBuilt(user, built)
      await msg.sendMessage('You are slim')
      sleep.sleep(2)
      calcResults.final(path.id)
      sleep.sleep(2)
      await msg.sendMessage("Thank you!")
      await isCandidate.yes(user)?msg.sendMessage('Mind sending a pic ?'): null
    }
    break;
    case "Sto":{
      user = path.id
      built = false
      registerResults.isBuilt(user, built)
      await msg.sendMessage('You are stocky')
      sleep.sleep(2)
      calcResults.final(path.id)
      sleep.sleep(2)
      await msg.sendMessage("Thank you for replies!")
      await isCandidate.yes(user)?msg.sendMessage('Mind sending a pic ?'): null
    }
    break;
    default:
      null;
      break;
  }
  msg.deleteMessage(msg_id)
};
