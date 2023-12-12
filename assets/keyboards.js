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

module.exports = { key_origin };
