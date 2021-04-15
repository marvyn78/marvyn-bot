const { MessageEmbed } = require("discord.js");

module.exports = (client, member) => {
  const embed = new MessageEmbed()
  .setAuthor(`${member.displayName}`, member.user.displayAvatarURL())
  .setColor("#f20c0c")
  .setFooter("Un utilisateur a quitté")
  .setTimestamp()

  client.channels.cache.get('737088700223193156').send(embed);
}
