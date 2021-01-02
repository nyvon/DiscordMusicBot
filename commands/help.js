module.exports = {
    name: 'help',
    description: 'Display all available commands with their description',
    argsDescription: '',
    execute(bot, message, args){
        let helpText = "__**List of commands :**__"
        let commandArray = bot.commands.array();
    for(const command of commandArray) {
        helpText += ` 
        - !${command.name} ${command.argsDescription} -> ${command.description}`
    }

    message.reply(helpText)
    }
}