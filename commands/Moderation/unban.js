const ms = require("ms");
const { MessageEmbed } = require("discord.js");


module.exports.run = (client, message, args) => {
  let user = message.guild.member(message.mentions.users.first())
  let tempbanRole = message.guild.roles.cache.find(r => r.name === 'tempban');

   if (!user.roles.cache.has(tempbanRole.id)) return message.reply("L'utilisateur mentionner n'est pas ban!");
   user.roles.remove(tempbanRole.id);
   message.channel.send(`<@${user.id}> n'est plus ban`)


  const embed = new MessageEmbed()
   .setAuthor(`${ user.user.username}`)
   .setColor("#bdb7b5")
   .setDescription(`**Action**: unban`)
   .setThumbnail(user.user.avatarURL())
   .setTimestamp()
   .setFooter(message.author.username, message.author.avatarURL());

   client.channels.cache.get('737088700223193156').send(embed);
};

module.exports.help = {
  name: "unban",
  aliases: ['unban'],
  category: 'moderation',
  description: "unban un utilisateur",
  cooldown: 0,
  usage: `<@user>`,
  isUserAdmin: true,
  permissions:true,
  args: true
};