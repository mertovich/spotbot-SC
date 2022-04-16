const { Client, Intents, GuildMember,Guild} = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
require('dotenv').config()

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
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
});

client.login(process.env.TOKEN);