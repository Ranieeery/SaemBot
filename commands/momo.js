const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("momo")
    .setDescription("Melhor integrante do Twice"),

  async execute(interaction) {
    await interaction.reply(
      "https://youtu.be/5KJN8f0z5Ro"
    );
  },
};
