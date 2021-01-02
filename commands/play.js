const YoutubeStream = require('ytdl-core');
const FFMPEG = require('ffmpeg-static');
const opusscript = require('opusscript');

module.exports = {
    name: 'play',
    description: 'Play a song from a youtube video',
    argsDescription: '**<video_url>**',
    execute(bot, message, args){
// get the chanel
let voiceChannel = message.member.voice.channel
if (voiceChannel) {

    // get the args
    let args = message.content.split(/ +/);
    console.log('args : ' + args[1]);
    //join voice channel
    voiceChannel
        .join()
        .then(function (connection) {
            // start streaming
            let stream = YoutubeStream(args[1], { quality: 'highestaudio', filter: 'audioonly', highWaterMark: 1024 * 1024 * 10 });
            stream.on('error', function (error) {
                console.error(error);
                message.reply("There was an error trying to read the video");
                connection.disconnect();
            });

            //play stream
            const dispatcher = connection.play(stream, { volume: 0.5 })
                .on('end', function () {
                    dispatcher.destroy();
                    connection.disconnect();
                })

                dispatcher.setVolume(0.1);

            bot.on('message', message => {
                // !volume command
                if (message.content.startsWith('!volume')) {
                    let args = message.content.split(' ');
                    console.log('args : ' + args[1]);
                    if (args[1] === undefined && !(args[1] >= 0 && args[1] <= 100)) {
                        message.reply("You must give a number between 0 and 100.")
                    } else {
                        let volume = args[1] / 100;
                        dispatcher.setVolume(volume);
                    }
                }
                /*
                // broken on streams => download sound first then stream file
                if (message.content.startsWith('!pause')) {
                    dispatcher.pause();
                }

                if (message.content.startsWith('!resume')) {
                    dispatcher.resume();
                }
                */
            });
        })
} else {
    message.reply("Your are not connected on a voice channel!")
}    }
}