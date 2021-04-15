const { MessageEmbed, MessageAttachment } = require("discord.js");
const moiImg = new MessageAttachment('./assets/img/moi.jpg');

module.exports.run = (client, message, args) => {
     const embed = new MessageEmbed()
      .setColor("#d1320f")
      .setTitle("[MARVYN]")
      .setThumbnail('attachment://moi.jpg')
      .attachFiles(moiImg)
      .setFooter("Ma chaine")
      .setDescription(":point_up_2: lien :point_up_2:")
      .setURL("https://www.youtube.com/channel/UCgCSjvY2tcFhEcN59sMvaDA")
      .addFields(
        { name: "Abonnez vous" , value: 'Et partager', inline: true},
      )
     .setTimestamp();
     message.channel.send(embed);
  }
module.exports.help = {
  name: "youtube",
  aliases: ['yt'],
  category: 'misc',
  description: "chaine youtube",
  cooldown: 60,
  usage: '',
  isUserAdmin: false,
  permissions: false,
  args: false
};