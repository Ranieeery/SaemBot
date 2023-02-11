const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("dogao")
    .setDescription("manda um dogão"),

  async execute(interaction) {
    await interaction.reply(
      "https://raw.githubusercontent.com/Ranieeery/SaemBot/main/assets/dog.jpg"
    );
  },
};
