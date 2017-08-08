  // -- INITIALIZE DISCORD -- //
const discord = require('Discord.js');
const client = new discord.Client();
const token = "";
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
    // check IF incomming messages start with a dollar sign
    if(msg.content.startsWith('$')){
         var tag = (msg.content.split(' ')[0]).replace("$","");
         db.getAllTagsByName(tag).then(function(e){
         });
       }else if(msg.content.startsWith('#')){
         var tag = (msg.content.split(' ')[0]).replace("#","");
         var type = (msg.content.split(' ')[1]);
         var url = (msg.content.split(' ')[2]);
          if(type == 'yt'){
            handleYoutube(tag, url);
          }
       }
});

function handleYoutube(tag, url){
    db.saveYoutubeURL(url).then(function(e){
      console.log(typeof e);
      var yt_id = e["last_insert_rowid()"];
      db.handleTag(tag, null, yt_id);
    });
}

function handleImage(tag, url){

}
