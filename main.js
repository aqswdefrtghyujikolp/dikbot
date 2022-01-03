const dotenv = require("dotenv")
const discord = require("discord.js")
const client = new discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_WEBHOOKS", "GUILD_MESSAGE_REACTIONS"] })
var BotPrefix = "!t"

//this bot is not even good, what are you doing?
/*ah anyway
hope you enjoy my JavaScript warmup*/
client.on("messageCreate", (message) => {
    if (message.content == BotPrefix + " random"){
      message.reply("this is a random text that I have generated") ||
      message.channel.send("no.")

    }
})
client.on("messageCreate", (message) => {
    if (message.content == prefix){
        message.channel.send("the prefix is !t")
    }
})
client.on("")

client.login(process.env.token)