const ms = require("ms");
const { MessageEmbed } = require("discord.js");


module.exports.run = async (client, message, args) => {
  let user = message.guild.member(message.mentions.users.first())
  let tempbanRole = message.guild.roles.cache.find(r => r.name === 'tempban');
  let tempbanTime = (args[1] || '60s');
  const reason = (args.slice(2).join(' ') || 'Aucune raison specifier');

  if (!tempbanRole){
    tempbanRole = await message.guild.roles.create({
      data: {
        name: 'tempban',
        color: '#ff4000',
        permissions: []
      } 
    })
    message.guild.channels.cache.forEach(async (channel, id) => {
      await channel.updateOverwrite(tempbanRole,{
        SEND_MESSAGES: false,
        ADD_REACTIONS: false,
        CONNECT: false
      })
    })
  }
   await user.roles.add(tempbanRole.id);
   message.channel.send(`<@${user.id}> est ban pendants ${ms(ms(tempbanTime))} pour ${reason}`)

  setTimeout(() => {
    user.roles.remove(tempbanRole.id)
  }, ms(tempbanTime));
  
  const embed = new MessageEmbed()
   .setAuthor(`${user.user.username}`)
   .setColor("#ff4000")
   .setDescription(`**Action**: tempban\n**Temps**: ${ms(ms(tempbanTime))}\n**Raison**: ${reason}`)
   .setThumbnail(user.user.avatarURL())
   .setTimestamp()
   .setFooter(message.author.username, message.author.avatarURL());

   client.channels.cache.get('737088700223193156').send(embed);

};

module.exports.help = {
  name: "tempban",
  aliases: ['tempban'],
  category: 'moderation',
  description: "bannir un utilisateur temporerement",
  cooldown: 0,
  usage: `<@user> <time> <reason>`,
  isUserAdmin: true,
  permissions:true,
  args: true
};