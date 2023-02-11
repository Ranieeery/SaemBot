const { Client, Events, GatewayIntentBits, Collection } = require("discord.js");

const dotenv = require("dotenv");
dotenv.config();
const { TOKEN, CLIENT_ID, GUILD_ID } = process.env;

const fs = require("node:fs");
const path = require("node:path");

const commandsPath = path.join(__dirname, "commands");
const commandFiles = fs
  .readdirSync(commandsPath)
  .filter((file) => file.endsWith(".js"));

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection();

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);

  if ("data" in command && "execute" in command) {
    client.commands.set(command.data.name, command);
  } else {
    console.log(
      `Esse comando em ${filePath} está com "data" ou "execute" ausentes`
    );
  }
}

client.once(Events.ClientReady, (c) => {
  console.log(`Ih entrei, sou o ${c.user.tag}`);
});

client.login(TOKEN);

client.on(Events.InteractionCreate, async (interaction) => {
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
        await interaction.reply(
          "Você ter ganho é a prova que os bots não possuem inteligência para dominar o mundo"
        );
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

  if (!interaction.isChatInputCommand()) return;
  const command = interaction.client.commands.get(interaction.commandName);
  if (!command) {
    console.error("Comando não encontrado");
    return;
  }

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply("Porra deu erro");
  }
});
