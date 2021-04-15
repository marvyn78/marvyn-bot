const { MessageEmbed } = require("discord.js");

module.exports = (client, member) => {
  const embed = new MessageEmbed()
  .setAuthor(`${member.displayName}`, member.user.displayAvatarURL())
  .setColor("#35f092")
  .setFooter("Un utilisateur a rejoin")
  .setTimestamp()

  client.channels.cache.get('737088700223193156').send(embed);
}
