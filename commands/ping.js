const { SlashCommandBuilder, AttachmentBuilder } = require("discord.js")

const file = new AttachmentBuilder('../assets/dog.jpg');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("dogao")
        .setDescription("manda um dogão"),

    async execute(interaction) {
        await interaction.reply("https://raw.githubusercontent.com/Ranieeery/Alura/main/Imers%C3%A3o%20Java/figsWhatsapp/img/dog.jpg")
    }
}