  // -- INITIALIZE DISCORD -- //
const discord = require('Discord.js');
const client = new discord.Client();
const token = undefined;

// -- CHECK IF TOKEN IS SET -- //
token == undefined ? console.log('Fill in you discord token') : client.login(token);

  // -- INITIALIZE DATABASE CLASS -- //
const dbManager = require('./databaseManager.js');
const db = new dbManager();



client.on('ready', () => {
    console.log('I am ready sempai');
});

client.on('message', (msg) => {


})
