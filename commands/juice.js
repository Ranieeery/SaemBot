const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("juice")
    .setDescription("Somente e apenas"),

  async execute(interaction) {
    await interaction.reply(
      "https://youtu.be/hZhU1QCWVEs"
    );
  },
};
