const { Client, GatewayIntentBits, EmbebBuilder, PermissionsBitField, Permissions } = require(`discord.js`);

const prefix = '!';

const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on("ready", () => {
    console.log("Bot is online")

    client.user.setActivity('PiLiPiLi coded me', {type: "ENJOYING LIFE"});

});

client.on("messageCreate", (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);

    const command = args.shift().toLowerCase();

    // message array

    const messageArray = message.content.split(" ");
    const argument = messageArray.slice(1);
    const cmd = messageArray[0]

    //COMMANDS

if(command === "test"){
    message.channel.send("Bot is working!")
}
if(command === "happy"){
    message.channel.send("STFU HAPPY!!!!!!")
}
if(command === "alexius"){
    message.channel.send("based!")
}
if(command === "obie"){
    message.channel.send(`<@156555180886720513> please help pilipili his code no work again`)
}
if(command === "saved"){
    message.channel.send("<@619382466960031770> stream where?")
}
if(command === "response"){
    message.channel.send("grind where?")
}
if(command === "takuan"){
    message.channel.send("<@574675586929262594> WAKEY WAKEY")
}

});
































client.login("/token goes here/");

