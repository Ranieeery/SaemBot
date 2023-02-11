const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("gabriel")
    .setDescription("iuq"),

  async execute(interaction) {
    await interaction.reply(
      "https://youtu.be/iUfdysK9N4I"
    );
  },
};
