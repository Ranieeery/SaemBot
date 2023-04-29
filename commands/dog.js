const { SlashCommandBuilder } = require("@discordjs/builders");
const fs = require("fs/promises");
const path = require("path");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("dogao")
    .setDescription("manda um dogão"),

  async execute(interaction) {
    const dogFolder = path.join(__dirname, "..", "assets", "dog");

    try {
      const files = await fs.readdir(dogFolder);
      const randomIndex = Math.floor(Math.random() * 1000);

      if (randomIndex == 1) {
        return await interaction.reply({files: [`${dogFolder}/dog.jpg`]});
      } else {
        return await interaction.reply({files: [`${dogFolder}/dogdourado.png`]});
      }

    } catch (error) {
      console.error(error);
      return await interaction.reply("Ih não achei");
    }
  },
};
