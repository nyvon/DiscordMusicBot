# DiscordMusicBot
A small bot to stream music in discord voice channel

In order to use this bot, you will need to create a new Discord Application and add a Bot : 
https://discord.com/developers/applications

You need to generate the bot's permissions. Use this generator : https://discordapi.com/permissions.html
The bot needs these permissions :
- All text permissions (even though as far as now, they are not all needed)
- Voice - View Channel
- Voice - Connect
- Voice - Speak
- Voice - Use Voice Activity

Don't forget to put the client ID found on the application link given above.

You can now click on the link to add it to your own server.

Once you have set your bot, copy your bot token (in the Bot page of Discord application page, link above) and put it in a new environment variable named DISCORD_SECRET_TOKEN.

You can launch the bot with : 
```sh
node musicBot.js
```


