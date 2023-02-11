const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Retorna o delay do bot"),

  async execute(interaction) {
    const sent = await interaction.reply({ content: 'Latindo...', fetchReply: true });
    interaction.editReply(`Au au 🐶, a latência é de ${sent.createdTimestamp - interaction.createdTimestamp}ms`);
  },
};
