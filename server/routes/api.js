var router = require('express').Router();
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('demodb01.sqlite');

router.get('/url',function(req,res){
  res.send("hello, world");
});

router.get('/playersAll', function (req, res, next) {
  try {
    var posts = db.all('SELECT * FROM player p', function(err, rows) {
      res.send(rows);
    });
  } catch (err) {
    next(err);
  }
});

router.get('/players', function (req, res, next) {
  try {
    var posts = db.all('SELECT p.id, p.name, p.selected, count(*) AS nr_of_pitchers FROM player p LEFT JOIN log l ON l.player_id = p.id WHERE l.action = 1 GROUP BY p.id', function(err, rows) {
      res.send(rows);
    });
  } catch (err) {
    next(err);
  }
});


router.get('/logs', function (req, res, next) {
  try {
    var posts = db.all('SELECT * FROM log', function(err, rows) {
      res.send(rows);
    });
  } catch (err) {
    next(err);
  }
});

router.post('/log', function(req, res, next) {
  var d = new Date();
  var playerId = req.body.player_id;
  db.run("INSERT INTO log (player_id, datetime, action) VALUES (?, ?, 1)", 1, d.toString());
  res.send({"succes": 1});
});

module.exports = router
