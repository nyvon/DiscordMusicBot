module.exports = {
    name: 'stop',
    description: 'Stop the bot and any current action',
    argsDescription: '',
    execute(bot, message, args){
        // get the chanel
        let voiceChannel = message.member.voice.channel
        if (voiceChannel) {

            //join voice channel
            voiceChannel
                .join()
                .then(function (connection) {
                    connection.disconnect();
                })
        } else {
            message.reply("Your are not connected on a voice channel!")
        }
    }
}