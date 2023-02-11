const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

const data = "a";

const fetchPokemon = async (pokemon) => {
  const APIResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  );

  if (APIResponse.status === 200) {
    data = await APIResponse.json();''
    await interaction.reply({ embeds: [pokeEmbed(data)] });
  }
};

const pokeEmbed = new EmbedBuilder(data)
  .setColor(0xff0000)
  .setTitle("Pokémon")
  .setDescription(`Dados do ${data.name}`)
  .addFields(
    { name: "Regular field title", value: "Some value here" },
    { name: "\u200B", value: "\u200B" },
    { name: "Número do pokemon:", value: `${data.id}`, inline: true }
  )

module.exports = {
  data: new SlashCommandBuilder()
    .setName("pokemon")
    .setDescription("Retorna dados de um pokemon aleatório"),

  async execute(interaction) {
    const data = await fetchPokemon(Math.floor(Math.random() * 1008));
  },
};
