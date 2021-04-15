const { MessageEmbed } = require("discord.js");
module.exports.run = (client, message, args) => {
  message.delete();
  message.channel.send(args.join(" "));
  const reason = (args.slice(0).join(' ') );


  const embed = new MessageEmbed()
  .setAuthor(message.author.username, message.author.avatarURL())
  .setColor("#f20c0c")
  .setDescription(`**Action**: Say\n**Salon**: ${message.channel}\n**Messages**: ${reason}`)
  .setFooter(message.author.username, message.author.avatarURL())
  .setTimestamp()
  
  client.channels.cache.get('737088700223193156').send(embed);
}


module.exports.help = {
  name: "say",
  aliases: ['s'],
  category: 'moderation',
  description: "faire ecrire un message au bot",
  cooldown: 0,
  usage: `<votre_message>`,
  isUserAdmin: false,
  permissions:true,
  args: true
};