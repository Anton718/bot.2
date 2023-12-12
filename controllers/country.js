exports.checkCountry = (msg) => {
  const res = msg.update?.callback_query?.data;
  const msg_id = msg.update?.callback_query?.message?.message_id;
  switch (res) {
    case "USA":
      msg.sendMessage('You are from USA, that\'s good!')
      break;
    case "Europe":
      msg.sendMessage('You are from Europe, so far away..')
      break;
    case "Russia":
      msg.sendMessage('You are from Russia.. Hm..')
      break;
    case "Turkey":
      msg.sendMessage('You are from Turkey, so far away..')
      break;
    default:
      null;
      break;
  }
  msg.deleteMessage(msg_id);
};
