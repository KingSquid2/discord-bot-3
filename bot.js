const Discord = require('discord.js');
const client = new Discord.Client();
 
const prefix = ';';
 
const fs = require('fs');
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
client.once('ready', () => {
    console.log('Online!');
 bot.user.setActivity('WATCHING for ;help')
});
 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } 
 else if(command === 'pong'){
        client.commands.get('pong').execute(message, args);
 }
 else if(command === 'shut up'){
        client.commands.get('shut').execute(message, args);
 }
 else if(command === 'hi'){
        client.commands.get('hi').execute(message, args);
 }
 else if(command === 'hello'){
        client.commands.get('hello').execute(message, args);
 }
 else if(command === 'help'){
        client.commands.get('help').execute(message, args);
 }
});
 
client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
