const { MessageEmbed } = require("discord.js");

module.exports = async (client, channel) => {
  const fetchGuildAuditLogs = await channel.guild.fetchAuditLogs({
    limit: 1,
    type: 'CHANNEL_CREATE',

  })
  const latestChannelCreated = fetchGuildAuditLogs.entries.first();
  console.log(latestChannelCreated)
  const { executor } = latestChannelCreated

  const embed = new MessageEmbed()
  .setAuthor("creation d'un nouveau Salon")
  .setColor("#f20c0c")
  .setDescription(`**Action**: creation de salon\n**Salon cree**: ${channel.name}`)
  .setTimestamp()
  .setFooter(message.author.username, message.author.avatarURL());
  
  client.channels.cache.get('737088700223193156').send(embed);
}
