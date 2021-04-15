const ms = require("ms");
const { MessageEmbed } = require("discord.js");


module.exports.run = async (client, message, args) => {
  let user = message.guild.member(message.mentions.users.first())
  let muteRole = message.guild.roles.cache.find(r => r.name === 'muted');
  let muteTime = (args[1] || '60s');
  const reason = (args.slice(2).join(' ') || 'Aucune raison specifier');

  if (!muteRole){
    muteRole = await message.guild.roles.create({
      data: {
        name: 'muted',
        color: '#000',
        permissions: []
      } 
    })
    message.guild.channels.cache.forEach(async (channel, id) => {
      await channel.updateOverwrite(muteRole,{
        SEND_MESSAGES: false,
        ADD_REACTIONS: false,
        CONNECT: false
      })
    })
  }

   await user.roles.add(muteRole.id);
   message.channel.send(`<@${user.id}> est muté pendants ${ms(ms(muteTime))} pour ${reason}`)

  setTimeout(() => {
    user.roles.remove(muteRole.id)
  }, ms(muteTime));
  
  const embed = new MessageEmbed()
   .setAuthor(`${user.user.username}`)
   .setColor("#63ff03")
   .setDescription(`**Action**: mute\n**Temps**: ${ms(ms(muteTime))} \n**Raison**: ${reason}`)
   .setThumbnail(user.user.avatarURL())
   .setTimestamp()
   .setFooter(message.author.username, message.author.avatarURL());

   client.channels.cache.get('737088700223193156').send(embed);

};

module.exports.help = {
  name: "mute",
  aliases: ['mute'],
  category: 'moderation',
  description: "mute un utilisateur",
  cooldown: 0,
  usage: `<@user> <time>`,
  isUserAdmin: true,
  permissions:true,
  args: true
};