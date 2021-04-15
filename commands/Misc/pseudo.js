const { GuildMember } = require("discord.js");

module.exports.run = (client, message, args) => {
  GuildMember.nickname()
  
  
  
  
  
  
  
  
  
  message.channel.send("cette command servira a changer son pseudo \nen train d'etre codeer");}
  



  module.exports.help = {
    name: "pseudo",
    aliases: ['surnom'],
    category: 'misc',
    description: "ending soon",
    cooldown: 0,
    usage: `<ending_soon>`,
    isUserAdmin: false,
    permissions:false,
    args: false
  };