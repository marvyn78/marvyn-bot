const { MessageEmbed } = require("discord.js");


module.exports.run = (client, message, args) => {
  let user = message.guild.member(message.mentions.users.first())
  let muteRole = message.guild.roles.cache.find(r => r.name === 'muted');

   if (!user.roles.cache.has(muteRole.id)) return message.reply("L'utilisateur mentionner n'est pas muté!");
   user.roles.remove(muteRole.id);
   message.channel.send(`<@${user.id}> n'est plus muté`)


  const embed = new MessageEmbed()
   .setAuthor(`${ user.user.username}`)
   .setColor("#bdb7b5")
   .setDescription(`**Action**: unmute`)
   .setThumbnail(user.user.avatarURL())
   .setTimestamp()
   .setFooter(message.author.username, message.author.avatarURL());

   client.channels.cache.get('737088700223193156').send(embed);
};

module.exports.help = {
  name: "unmute",
  aliases: ['unmute'],
  category: 'moderation',
  description: "unmute un utilisateur",
  cooldown: 0,
  usage: `<@user>`,
  isUserAdmin: true,
  permissions:true,
  args: true
};