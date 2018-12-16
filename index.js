const Discord = require("discord.js");
try {
    const bot = new Discord.Client();
    var prefix = ("*");

bot.on("ready", () => {
    console.log(bot.user.id)
})
bot.on("guildCreate", guild => {
    let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor("Kais bot ", bot.user.avatarURL)
    .setDescription("Découvre la commande pour rendre plus chill vos roles avec *help !")
    .setTimestamp()
    guild.send(embed)
})
bot.on("message", message => {
    if (message.content.startsWith(prefix+'rainbow')) {
        let mention = message.mentions.roles.first()
        if(message.channel.type === "dm" || message.channel.type === "group") return;
        else if(message.mentions.roles.size === 0) return message.channel.send(":x: **Usage valide :** `*rainbow <@mentiondurolearendrerainbow>`");
        else if(!message.guild.member(bot.user).hasPermission("MANAGE_ROLES") || !message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(":x: **Vous ou le bot manquez de perm (Permission requise : ** `MANAGE_ROLE`");
        else if(mention.position >= message.guild.member(bot.user).highestRole.position || mention.position >= message.member.highestRole.position) return message.channel.send(":x: **Le role du bot / votre role est en dessous ou égal de celui mentionné**");
        else{
            message.channel.send(":white_check_mark: **C'est partis :]**")
            setInterval(function () {mention.setColor('RANDOM')}, 4000);}
    }
    if(message.content.startsWith(prefix+"help")){
        let embed1 = new Discord.RichEmbed()
        .setAuthor("Commande Rainbow ", bot.user.avatarURL)
        .setDescription("`*rainbow <@mentiondurolearendremulticolore>` - **Rend multicolore un role** *(Note : pour mentionner un role , il faut l'activer dans les parametres de celui ci)*")
        .setColor("RANDOM")
        message.channel.send(embed1)
    }
})

bot.login(process.env.BOT_TOKEN)
} catch(error){}
