const Discord = require('discord.js');
const YoutubeStream = require('ytdl-core');
const FFMPEG = require('ffmpeg-static');
const opusscript = require('opusscript');
const bot = new Discord.Client();
const fs = require('fs');
const secretToken = process.env.DISCORD_SECRET_TOKEN;
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const prefix = '!';

bot.commands = new Discord.Collection();

// get all commands from commands folder and add it to the bot command collection
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    bot.commands.set(command.name, command)
}


bot.on('ready', function () {
    console.log("MusicBot is connected")
})

bot.on('message', message => {

    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if(!bot.commands.has(command)) return ;

    try{
        bot.commands.get(command).execute(bot, message,args);
    } catch (error) {
        console.error(error);
        message.reply(`There was an error trying to execute command : ${command} : ${error}`)
    }
});



bot.login(secretToken);

