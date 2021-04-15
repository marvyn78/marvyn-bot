const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {
  let user = message.guild.member(message.mentions.users.first());
  if (isNaN(args[1]) || (args[1] < 1 || args[1] > 100)) return message.reply('il faut specifier un **nombre** entre 1 est 1000');

 const messages = (await message.channel.messages.fetch({
   limit: 100,
   before: message.id,
 })).filter(a => a.author.id === user.id).array();

 messages.length = Math.min(args[1], messages.length);

if (messages.length === 0 || !user) return message.reply('aucun message a supprimer sur cette utilisateur ou il existe pas');

if (messages.length === 1) await messages[0].delete();
else await message.channel.bulkDelete(messages);

 message.delete();
  
 
 
 const embed = new MessageEmbed()
  .setAuthor(message.author.username, message.author.avatarURL())
  .setColor("#00b7ff")
  .setDescription(`**Action**: clearid\n**Nbr de messages**: ${args[1]}\n**user**: ${args[0]}\n**Salon**: ${message.channel}`)
  
  client.channels.cache.get('737088700223193156').send(embed);
}

module.exports.help = {
  name: "clearid",
  aliases: ['clearid'],
  category: 'moderation',
  description: "supprimer des message du utilisateur",
  cooldown: 0,
  usage: `<@user> <nombre_de_message>`,
  isUserAdmin: false,
  permissions:true,
  args: true
};