const { Client, CommandInteraction,MessageSelectMenu, MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");
const { Command } = require('reconlx')
module.exports = new Command({
    name: "ticket",
    description: "Ticket sistemini oluşturmanızı sağlar.",
    type: "CHAT_INPUT",
    options: [],
    run: async ({client, interaction, args}) => {
        if(!interaction.member.permissions.has("ADMINISTRATOR")) return interaction.followUp({embeds: [new MessageEmbed().setTitle("İşlem Başarısız").setDescription("Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.").setColor("RED").setFooter(`The Witcher`)]}).then(setTimeout(() => {interaction.deleteReply()}, 7000));
    
        let olustur = new MessageButton()
        .setEmoji("✉️")
        .setCustomId("nazlı")
        .setStyle("SECONDARY")

        let butonlar = new MessageActionRow()
        .addComponents(olustur)

        interaction.followUp({embeds: [new MessageEmbed().setTitle("Ticket Sistemi").setDescription("Ticket açmak için altta bulunan \`✉️\` butonuna basabilirsiniz.").setFooter("The Witcher").setColor("AQUA")], components: [butonlar]})
    },
});