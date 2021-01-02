module.exports = {
    name: 'ping',
    description: 'Send Pong',
    argsDescription: '',
    execute(bot, message, args){
        message.channel.send('Pong.');
    }
}