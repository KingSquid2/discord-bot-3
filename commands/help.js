
module.exports = {
    name: 'help',
    description: "this is a help command!",
    execute(message, args){
        message.channel.send('here are the commands: ;help, ;hi, ;hello, ;ping, ;pong,');
    }
}
