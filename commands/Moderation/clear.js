const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {
 if (isNaN(args[0]) || (args[0] < 1 || args[0] > 100)) return message.reply('il faut specifier un **nombre** entre 1 est 1000');

 const messages = await message.channel.messages.fetch({
   limit: Math.min(args[0], 100),
   before: message.id,
 })
 message.delete();
 await message.channel.bulkDelete(messages);
  
 
 
 const embed = new MessageEmbed()
  .setAuthor(message.author.username, message.author.avatarURL())
  .setColor("#00b7ff")
  .setDescription(`**Action**: clear\n**Nbr de messages**: ${args[0]}\n**Salon**: ${message.channel}`)
  .setFooter(message.author.username, message.author.avatarURL())
  .setTimestamp()
  
  client.channels.cache.get('737088700223193156').send(embed);
}

module.exports.help = {
  name: "clear",
  aliases: ['purge'],
  category: 'moderation',
  description: "supprimer des message",
  cooldown: 0,
  usage: `<nombre_de_message>`,
  isUserAdmin: false,
  permissions:false,
  args: true
};