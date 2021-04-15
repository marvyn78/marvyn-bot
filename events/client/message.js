const { Collection } = require('discord.js');
const { PREFIX } = require('../../config');


module.exports = (client, message) => {
    if(!message.content.startsWith(PREFIX) || message.author.bot) return;
    
    const args = message.content.slice(PREFIX.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    const user = message.mentions.users.first();
   
   
    
    
    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(commandName));
    
    if (!command) return;
   
    if (command.help.permissions && !message.member.hasPermission('BAN_MEMBERS')) return message.reply("tu n'as pas les permission pour faire cette commande");
   
   
    if (command.help.args && !args.length) {
     let noArgsReply = `La commande que tu vient d'ecrire est pas complete ${message.author}`;
   
     if (command.help.usage) noArgsReply += `\nVoici comment utiliser la commande \`${PREFIX}${command.help.name} ${command.help.usage}\``
     return message.channel.send(noArgsReply);
   };
   
   if (command.help.isUserAdmin && !user) return message.reply('il faut mentionner un utilisateur')
   
   if (command.help.isUserAdmin && message.guild.member(user).hasPermission('BAN_MEMBERS')) return message.reply("tu peut pas utiliser cette commande sur cette utilisateur.");
    
   
   
   if (!client.cooldowns.has(command.help.name)){
     client.cooldowns.set(command.help.name, new Collection());
   };
   const timeNow = Date.now();
   const tStramps = client.cooldowns.get(command.help.name);
   const cdAmount = (command.help.cooldown || 5) * 1000;
   
   if (tStramps.has(message.author.id)){
     const cdExpirationTime = tStramps.get(message.author.id) + cdAmount;
      if(timeNow < cdExpirationTime){
       timeLeft = (cdExpirationTime - timeNow ) / 1000;
       return message.reply(`merci d'attendre ${timeLeft.toFixed(0)} seconde(s) avant de refaire la commande\`${command.help.name}\``);
     };
   };
   tStramps.set(message.author.id, timeNow);
   setTimeout(() => tStramps.delete(message.author.id), cdAmount);
   
     command.run(client, message, args);
     
     };