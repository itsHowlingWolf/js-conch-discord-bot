var sqlite3 = require('sqlite3').verbose();
var file = "database.sqlite3";
var db = new sqlite3.Database(file);

db.serialize(function() {
    db.run("CREATE TABLE IF NOT EXISTS images(id INTEGER PRIMARY KEY AUTOINCREMENT, url TEXT)");
    db.run("CREATE TABLE IF NOT EXISTS youtube_sounds(id INTEGER PRIMARY KEY AUTOINCREMENT, url TEXT)")
    db.run("CREATE TABLE IF NOT EXISTS tags (id INTEGER PRIMARY KEY AUTOINCREMENT, tag TEXT, image_id INTEGER, yt_id INTEGER, FOREIGN KEY(image_id) REFERENCES images(id), FOREIGN KEY(yt_id) REFERENCES youtube_sounds(id))");

});

class dbManager{
  getAllTagsByName(name){
      return db.each("SELECT id, tag FROM tags", function(err, row){
        res.push(row);
      });
    };
    handleTag(tag, image_id, yt_id){
      var query = db.prepare("REPLACE INTO tags(tag, image_id, yt_id) VALUES (?,?,?)");
      return new Promise(function(resolve, reject) {
        query.run(tag, image_id, yt_id);
      });
    }

    saveYoutubeURL(url){
      var query = db.prepare("INSERT INTO youtube_sounds VALUES (?,?)");

      return new Promise(function(resolve, reject){
          query.run(null, url);
          db.get("SELECT last_insert_rowid();", function(err, res){
            resolve(res);
          });
        });
    }
};

module.exports = dbManager;
