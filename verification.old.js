async function Verification(interaction) {
  if (interaction.isStringSelectMenu()) {
    const values = ["rock", "paper", "scissor"];
    const valorBot = Math.floor(Math.random() * values.length);

    const selected = interaction.values[0];

    if (values[valorBot] == "rock") {
      if (selected == "rock") {
        await interaction.reply("Empatou, buceta");
      } else if (selected == "paper") {
        await interaction.reply("VAI SE FUDER FILHO DA PUTA TAQUEI PAPEL");
      } else if (selected == "scissor") {
        await interaction.reply("HAHAHAHAHAHAHAHAHA GANHEI");
      }
    } else if (values[valorBot] == "paper") {
      if (selected == "rock") {
        await interaction.reply("Achei fácil, ganhei");
      } else if (selected == "paper") {
        await interaction.reply("Igual, mds");
      } else if (selected == "scissor") {
        await interaction.reply("Você ter ganho é a prova que os bots não possuem inteligência para dominar o mundo");
      }
    } else if (values[valorBot] == "scissor") {
      if (selected == "rock") {
        await interaction.reply("Enfia essa pedra no teu cu");
      } else if (selected == "paper") {
        await interaction.reply("Cortei o papel e a fimose");
      } else if (selected == "scissor") {
        await interaction.reply("Eita, nós dois dando tesourada?? 🙈");
      }
    }
  }
}
