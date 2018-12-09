const Discord = require("discord.js");
try {
    const bot = new Discord.Client();


bot.on("ready", () => {
    console.log(bot.user.id)
})
bot.on("message", message => {
    if (message.content.startsWith('*rainbow')) {
        let mention = message.mentions.roles.first()
        if(message.channel.type === "dm" || message.channel.type === "group") return;
        else if(message.mentions.roles.size === 0) return message.channel.send("Usage valide : `*rainbow <@mentiondurolearendrerainbow>`");
        else if(!message.guild.member(bot.user).hasPermission("MANAGE_ROLES") || !message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Permission insuffisante du bot ou de vous (Permission requise : `MANAGE_ROLE`");
        else if(mention.position > message.guild.member(bot.user).highestRole.position || mention.position > message.member.highestRole.position) return message.channel.send("Le role du bot / votre role est en dessous de celui mentionné");
        else{
            setInterval(function () {mention.setColor('RANDOM')}, 100);}
    }
})

bot.login(process.env.BOT_TOKEN)
} catch(error){}
