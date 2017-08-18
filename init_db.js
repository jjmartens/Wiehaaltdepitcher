
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('demodb01.sqlite');

db.serialize(function() {
  db.run("CREATE TABLE IF NOT EXISTS `log` (`id` int(11) NOT NULL,  `player_id` int(11) NOT NULL,  `datetime` date NOT NULL,  `action` int(11) NOT NULL)");
  db.run("CREATE TABLE IF NOT EXISTS `player` (`id` int(11) NOT NULL,  `name` varchar(255) NOT NULL,  `selected` tinyint(1) NOT NULL DEFAULT '0')");
  db.run("INSERT INTO player VALUES (1,'Jan',1)")
  console.log("database aangemaakt!");
});

db.close();
