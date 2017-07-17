var sqlite3 = require('sqlite3').verbose();
var file = "database";
var db = new sqlite3.Database(file);

db.serialize(function() {
    db.run("CREATE TABLE IF NOT EXISTS tags (id INTEGER PRIMARY KEY AUTOINCREMENT, tag TEXT)");
    var query = db.prepare("INSERT INTO tags VALUES (?,?)");
    query.run(null,"Test");

});

class dbManager{
   getTags(){
    db.each("SELECT id, tag FROM tags", function(err, row){
        console.log(row.id + ": " + row.tag);
    });
  };
};

module.exports = dbManager;
