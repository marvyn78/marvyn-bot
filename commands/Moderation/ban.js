const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args) => {
  const user = message.mentions.users.first()
  const reason = (args.slice(1).join(' ') || 'Aucune raison specifier');
  user ? message.guild.member(user).ban(reason) : message.channel.send("L'utilisateur n'existe pas")

  const embed = new MessageEmbed()
  .setAuthor(`${ user.username}`)
  .setColor("#f20c0c")
  .setDescription(`**Action**: Ban\n**Raison**: ${reason}`)
  .setThumbnail(user.avatarURL())
  .setTimestamp()
  .setFooter(message.author.username, message.author.avatarURL());
  
  client.channels.cache.get('737088700223193156').send(embed);
}

module.exports.help = {
  name: "ban",
  aliases: ['ban'],
  category: 'moderation',
  description: "ban un utilisateur",
  cooldown: 0,
  usage: `<@user> <reason>`,
  isUserAdmin: true,
  permissions:true,
  args: true
};