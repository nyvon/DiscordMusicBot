module.exports = {
    name: 'say',
    description: 'Repeat the given text',
    argsDescription: '**<text>**',
    execute(bot, message, args){
        message.reply(message.content.substring(5));
    }
}