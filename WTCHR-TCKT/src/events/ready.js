
const { Client } = require("discord.js"); 
const { red, green, blue, yellow, cyan } = require('chalk'); // npm i chalk (you can use colors too)
const client = require('../index')
client.on('ready', () => {

    // Set the Bot status
    client.user.setPresence({ activities: [{ name: `WITCHER 🧡 NIYUKI` }], status: "dnd" });

    const loading = String.raw`
                  __         ______   __    __  __    __   ______   __    __  ______  __    __   ______  
                 /  |       /      \ /  |  /  |/  \  /  | /      \ /  |  /  |/      |/  \  /  | /      \ 
                 $$ |      /$$$$$$  |$$ |  $$ |$$  \ $$ |/$$$$$$  |$$ |  $$ |$$$$$$/ $$  \ $$ |/$$$$$$  |
                 $$ |      $$ |__$$ |$$ |  $$ |$$$  \$$ |$$ |  $$/ $$ |__$$ |  $$ |  $$$  \$$ |$$ | _$$/ 
                 $$ |      $$    $$ |$$ |  $$ |$$$$  $$ |$$ |      $$    $$ |  $$ |  $$$$  $$ |$$ |/    |
                 $$ |      $$$$$$$$ |$$ |  $$ |$$ $$ $$ |$$ |   __ $$$$$$$$ |  $$ |  $$ $$ $$ |$$ |$$$$ |
                 $$ |_____ $$ |  $$ |$$ \__$$ |$$ |$$$$ |$$ \__/  |$$ |  $$ | _$$ |_ $$ |$$$$ |$$ \__$$ |
                 $$       |$$ |  $$ |$$    $$/ $$ | $$$ |$$    $$/ $$ |  $$ |/ $$   |$$ | $$$ |$$    $$/ 
                 $$$$$$$$/ $$/   $$/  $$$$$$/  $$/   $$/  $$$$$$/  $$/   $$/ $$$$$$/ $$/   $$/  $$$$$$/  
                                                                                                                                                                                                      
`;

const backslash = String.raw` \ `;
const prefix = client.config.prefix;

console.log(red(`Starting ${client.user.tag}, hold on ...`))
console.log(red(loading))

console.log(``);
console.log(green(`                                                     my cute bot`));
console.log(``);
console.log(``);
const { readdirSync } = require('fs');
const ascii = require('ascii-table')

let table = new ascii("Slash-Command");
table.setHeading('Slash-Command', ' Load status');
let table2 = new ascii("Commands");
table2.setHeading('Command', ' Load status');

    // Load Status
    readdirSync('./src/commands/').forEach(dir => {
        const commands = readdirSync(`./src/commands/${dir}/`).filter(file => file.endsWith('.js'));
        for (let file of commands) {
            let pull = require(`../commands/${dir}/${file}`);
            if (pull.name) {
                table2.addRow(file, '✅')
            } else {
                table2.addRow(file, '❌ -> Missing a help.name, or help.name is not a string.')
                continue;
            }
        }
    });
    // Load Status
    readdirSync('./src/SlashCommands/').forEach(dir => {
        const commands = readdirSync(`./src/SlashCommands/${dir}/`).filter(file => file.endsWith('.js'));
        for (let file of commands) {
            let pull = require(`../SlashCommands/${dir}/${file}`);
            if (pull.name) {
                table.addRow(file, '✅')
            } else {
                table.addRow(file, '❌ -> Missing a help.name, or help.name is not a string.')
                continue;
            }
        }
    });
    console.log(yellow('               + ================================Commands========================================== +'));
    console.log(cyan(table2.toString()));
    console.log(yellow('               + ================================Slash Commands========================================== +'));
    console.log(cyan(table.toString()));
console.log(cyan(`                       Author   [i] :: Programmed by Niyuki/Witcher :: © 2021 Development                   `));
console.log(cyan(`                       Bot info [i] :: Status                       :: ✅ Online                           `));
console.log(cyan(`                       Users    [i] ::                              :: ${client.users.cache.size}  Users   `));
console.log(cyan(`                       Guilds   [i] ::                              :: ${client.guilds.cache.size} Guilds  `));
console.log(yellow('               + ================================Website=========================================== +'));
console.log(cyan(`                       Link     [i] ::       thewitcher.codes       ::  Website                          `));


    
console.log(red("Press [CTRL + C] to stop the Terminal ..."))
})