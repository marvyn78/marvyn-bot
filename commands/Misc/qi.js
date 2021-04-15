const { MessageEmbed } = require("discord.js");
const randomQI = () => Math.floor(Math.random() * 230) + 1;


module.exports.run = (client, message, args) => {
  const user = message.mentions.users.first()
  
  
  const embed = new MessageEmbed()
   .setAuthor(`${ user.username}`)
   .setColor("#5b565c")
   .setTitle("Ton Q.I")
   .setThumbnail(user.avatarURL())
   .setTimestamp()
   .addFields(
    { name: "est de" , value: randomQI(), inline: true},
  )
   .setFooter(message.author.username);
   

   message.channel.send(embed);
};

module.exports.help = {
  name: "qi",
  aliases: ['qi'],
  category: 'misc',
  description: "dit ton qi \n(nombre ramdom)",
  cooldown: 60,
  usage: `<@pseudo>`,
  isUserAdmin: false,
  permissions:false,
  args: true
};