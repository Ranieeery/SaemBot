const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("mina")
    .setDescription("Seus cabelo é daora"),

  async execute(interaction) {
    await interaction.reply(
      "https://youtu.be/Inb1OmY1dbw"
    );
  },
};
