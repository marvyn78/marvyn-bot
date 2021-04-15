const { MessageEmbed, MessageAttachment } = require("discord.js");
const pppImg = new MessageAttachment('./assets/img/ppp.png');

module.exports.run = (client, message, args) => {
     const embed = new MessageEmbed()
      .setColor("#000000")
      .setTitle("marvyn#7799")
      .setThumbnail('attachment://ppp.png')
      .attachFiles(pppImg)
      .addFields(
        { name: "est mon createur" , value: "GG a lui :heart:", inline: true},
      )
     .setTimestamp();
     message.channel.send(embed);
  }
module.exports.help = {
  name: "bot",
  aliases: ['createur'],
  category: 'misc',
  description: "cite la personne\n qui m'a codder",
  cooldown: 60,
  usage: '',
  isUserAdmin: false,
  permissions: false,
  args: false
};