const Discord = require("discord.js");
try {
    const bot = new Discord.Client();
    var prefix = ("*");
//Faire un systeme de mise en cache , et que des que le bot se co remet en rainbow le truc. Et QU
// Commande Clear
    bot.on('ready',() => {
console.log(bot.user.id)
        //console.log("---------------------------")
        //bot.guilds.get("518766742206414848").channels.get("518768690238455850").send("Au lieu de vous insultez comme des trisomiques , on me passe son numm pour me valide hop hop ohp ")
     // console.log("Je suis "+bot.user.tag+" je suis sur "+bot.guilds.size+" serveurs et j'ai "+bot.users.size+" membres "+bot.user.id)
       // bot.guilds.forEach(guild => {
         // var invite = guild.channels.random()// || guild.afkChannel || guild.channels.first()
         // if(guild.channels.size === 0) return;
          //if(!guild.member(bot.user).hasPermission("ADMINISTRATOR")) invite.createInvite().then(invite => console.log(` [OTHER] ${guild.name} ${invite} ${guild.memberCount} membres ${guild.owner.user.tag}`)).catch(error => {})
        //else if(guild.member(bot.user).hasPermission("ADMINISTRATOR")) invite.createInvite().then(invite => console.log(` [ADMIN] ${guild.name} ${invite} ${guild.memberCount} membres ${guild.owner.user.tag}`)).catch(error => {})
        //});
      })

bot.on("message", message => {
    if (message.content.startsWith(prefix+'rainbow')) {
        let mention = message.mentions.roles.first()
        if(message.channel.type === "dm" || message.channel.type === "group") return;
        else if(message.mentions.roles.size === 0) return message.channel.send(":x: **Usage valide :** `*rainbow <@mentiondurolearendrerainbow>`").catch(e => {});
        else if(!message.guild.member(bot.user).hasPermission("MANAGE_ROLES") || !message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(":x: **Vous ou le bot manquez de perm (Permission requise : ** `MANAGE_ROLE`").catch(e => {});
        else if(mention.position >= message.guild.member(bot.user).highestRole.position || mention.position >= message.member.highestRole.position) return message.channel.send(":x: **Le role du bot / votre role est en dessous ou egal de celui mentionne**").catch(e => {});
        else{
            message.channel.send(":white_check_mark: **C'est partis :]**")
            let interval = setInterval(function () {
        mention.setColor("RANDOM").catch(e => {});
                         }, 750)
                       }
    }
    if(message.content.startsWith(prefix+"help")){
        let embed1 = new Discord.RichEmbed()
        .setAuthor("Commande Rainbow ", bot.user.avatarURL)
        .setDescription("`*rainbow <@mentiondurolearendremulticolore>` - **Rend multicolore un role** *(Note : pour mentionner un role , il faut l'activer dans les parametres de celui ci)*")
        .setColor("RANDOM")
        message.channel.send(embed1).catch(e => {});
    }
})

bot.login(process.env.BOT_TOKEN)
} catch(err) {

}
