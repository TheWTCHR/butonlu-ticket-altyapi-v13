const client = require("../index");
const {MessageEmbed, Collection, Interaction, MessageButton, MessageActionRow} = require('discord.js')
const Timeout = new Collection();
const ms = require('ms')
const config = require("../config.json")

client.on("interactionCreate", async (interaction) => {
    if(!interaction.isButton()) return;
    let embed = new MessageEmbed()
    .setTitle("Ticket Yönetim")
    .setDescription("Aşağıda bulunan butonlardan biletinizi yönetebilirsiniz.\n\n❓ = Daha fazla seçeneğe bakmanızı sağlar. \n📛 = Ticketi kapatmanızı sağlar.")
    .setFooter("The Witcher")
    .setColor("AQUA")

    let bilgilendirme = new  MessageButton()
    .setEmoji("❓")
    .setCustomId("bilgilendir")
    .setStyle("SECONDARY")

    let kapat = new MessageButton()
    .setEmoji("📛")
    .setCustomId("kapat")
    .setStyle("SECONDARY")

    let butonlar = new MessageActionRow()
    .addComponents(bilgilendirme)
    .addComponents(kapat)

    if(interaction.customId == 'nazlı') {
        if(interaction.guild.channels.cache.find((ch) => ch.name == interaction.user.id)) return;
        interaction.guild.channels.create(interaction.user.id, {
            type: 'GUILD_TEXT',
            permissionOverwrites: [
                {
                    id: interaction.guild.roles.everyone,
                    deny: ["VIEW_CHANNEL","SEND_MESSAGES"],
                },
                {
                    id: interaction.user.id,
                    allow: ["VIEW_CHANNEL","SEND_MESSAGES"],
                },
                {
                    id: config.yetkiliRol,
                    allow: ["VIEW_CHANNEL","SEND_MESSAGES"],
                }
            ]
        }).then(kanal => {kanal.send({embeds: [embed], components: [butonlar]})})
        interaction.reply({embeds: [new MessageEmbed().setTitle("Ticket Oluşturuldu").setDescription("Ticket başarılı bir şekilde oluşturuldu.").setFooter("The Witcher").setColor("GREEN")], ephemeral: true})
    }
    if(interaction.customId == 'kapat') {
        interaction.reply({content: 'Ticket 5 saniye sonra kapatılacaktır...'}).then(setTimeout(() => {interaction.channel.delete()}, 5000));
    }
    if(interaction.customId == 'bilgilendir') {
        interaction.reply({embeds: [new MessageEmbed().setTitle("Bura Sizde").setDescription("Bu alanı siz kendi isteklerinize göre şekillendirebilir veya silebilirsiniz tamamen size kalmış ^^").setFooter("The Witcher").setColor("DARK_AQUA")]})
    }
    
});
