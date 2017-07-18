  // -- INITIALIZE DISCORD -- //
const discord = require('Discord.js');
const client = new discord.Client();
const token = undefined;

  // -- CHECK IF TOKEN IS SET -- //
token == undefined ? console.log('Fill in you discord token') : client.login(token);

  // -- INITIALIZE DATABASE CLASS -- //
const dbManager = require('./databaseManager.js');
const db = new dbManager();

  // -- NOTIFY THE SERVER THAT ITS READY FOR USE -- //
client.on('ready', () => {
    console.log('The Conch is ready. Fire away!');
});

  // -- DISCORD.JS LiSTENER FOR INCOMMING MESSAGES -- //
client.on('message', (msg) => {

});
