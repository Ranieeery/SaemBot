const {
  SlashCommandBuilder,
  ActionRowBuilder,
  StringSelectMenuBuilder,
} = require("discord.js");

const row = new ActionRowBuilder().addComponents(
  new StringSelectMenuBuilder()
    .setCustomId("select")
    .setPlaceholder("Escolha entre pedra, papel e tesoura")
    .addOptions(
      {
        label: "Pedra",
        description: "Ganha de tesoura mas perde para papel",
        value: "rock",
      },
      {
        label: "Papel",
        description: "Ganha de pedra mas perde para tesoura",
        value: "paper",
      },
      {
        label: "Tesoura",
        description: "Ganha de papel mas perde para pedra",
        value: "scissor",
      }
    )
);

module.exports = {
  data: new SlashCommandBuilder()
    .setName("jokenpo")
    .setDescription("Um rápido pedra, papel e tesoura"),

  async execute(interaction) {
    await interaction.reply({
      content: "Selecione uma das opções abaixo:",
      components: [row],
    });
  },
};
