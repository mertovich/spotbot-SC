const { Client, Intents, GuildMember,Guild} = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
require('dotenv').config()
const dataManager = require('./dataManager');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(`${client.guilds.cache.size} guilds`);
    
    discordServers = client.guilds.cache.map(g => g.id)
    discordServers.forEach(element => {
        let serverID = element
        const list = client.guilds.cache.get(serverID); 
        const userList = list.members.cache.map(member => {
            return {
                id: member.user.id,
                name: member.user.username,
                image:`https://cdn.discordapp.com/avatars/${member.user.id}/${member.user.avatar}.png?size=256`
            }
        });
        dataManager.createDB(userList);
    });
});

client.on('message', async message => {
    
    if (message.content === 'ping') {
        await message.reply(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
    }

    if(message.content == 'raffle'){
        let serverID = message.guild.id;
        const list = client.guilds.cache.get(serverID); 
        const userList = list.members.cache.map(member => member.user.id);
        var item = userList[Math.floor(Math.random()*userList.length)];
        await message.reply(`🎉Winner is <${'\@'+item}>`);
    }

    if (message.content == 'users') {
        let serverID = message.guild.id;
        const list = client.guilds.cache.get(serverID); 
        const userList = list.members.cache.map(member => {
            return {
                id: member.user.id,
                name: member.user.username,
                image:`https://cdn.discordapp.com/avatars/${member.user.id}/${member.user.avatar}.png?size=256`
            }
        });
        dataManager.createDB(userList);
    }
});

client.login(process.env.TOKEN);