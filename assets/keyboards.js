const key_origin = {
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: "USA",
          callback_data: "USA",
        },
        {
          text: "Europe",
          callback_data: "Europe",
        },
        {
          text: "Russia",
          callback_data: "Russia",
        },
        {
          text: "Turkey",
          callback_data: "Turkey",
        },
      ],
    ],
  },
};

const key_age = {
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: "18 - 22",
          callback_data: "1",
        },
        {
          text: "23 - 30",
          callback_data: "2",
        },
        {
          text: "30 - 40",
          callback_data: "3",
        },
        {
          text: "over 40",
          callback_data: "4",
        },
      ],
    ],
  },
}

const key_built = {
  reply_markup: {
    inline_keyboard: [
        [{
          text: "Muscled",
          callback_data: "Mus",
        }],
        [{
          text: "Toned",
          callback_data: "Ton",
        }],
        [{
          text: "Average",
          callback_data: "Ave",
        }],
        [{
          text: "Slim",
          callback_data: "Sli",
        }],
        [{
          text: "Stocky",
          callback_data: "Sto"
        }]
      ]
  },
}
module.exports = { key_origin, key_age, key_built };
